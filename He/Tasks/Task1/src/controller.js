import {
    Store
} from './util';
import View from './view'

const _activeRoute = Symbol('activeRoute')
const _lastActiveRoute = Symbol('lastActiveRoute')
const _filterItem = Symbol('filter')

export default class Controller {

    /**
     * 
     * @param {View} view 
     * @param {Store} store 
     */
    constructor(view, store) {
        this.view = view
        this.store = store
        this[_activeRoute] = ''
        this[_lastActiveRoute] = null
        view.bindInsertItem(this.insertItem.bind(this))
        view.bindDeleteItem(this.deleteItem.bind(this))
        view.bindUpdateItem()
        view.bindSaveUpdateItem(this.saveUpdateItem.bind(this))
        view.bindToggleCompleteItem(this.toggleCompleteItem.bind(this))
        view.bindToggleAll(this.toggleAll.bind(this))
        view.bindRemoveCompleted(this.removedCompleted.bind(this))
    }


    /**
     * 去掉路由中的#/ 并根据路由刷新
     * @param {string} rawRoute 
     */
    refreshView(rawRoute) {
        const route = rawRoute.replace(/^#\//, '')
        this[_activeRoute] = route
        this[_filterItem]();
    }

    /**
     * 
     * @param {*} content 
     */
    insertItem(content) {
        this.store.insert({
            id: Date.now(),
            content,
            completed: false
        }, () => {
            this.view.clearTodoInput();
            this[_filterItem](true)
        })
    }

    deleteItem(id) {
        this.store.delete({
            id
        }, () => {
            this[_filterItem]();
            this.view.deleteItem(id)
        })
    }

    saveUpdateItem(id, content) {
        if (content.length) {
            this.store.update({
                id,
                content
            }, () => {
                this.view.saveUpdateItem(id, content)
            })
        } else {
            this.deleteItem(id)
        }
    }

    toggleCompleteItem(id, completed) {
        this.store.update({
            id,
            completed
        }, () => {
            this.view.toggleCompleteItem(id, completed)
            this[_filterItem](true)
        })

    }

    toggleAll(completed) {
        this.store.find({completed:!completed},resultArray=>{
            for(let item of resultArray){
                this.toggleCompleteItem(item.id,completed)
            }
            this[_filterItem]()
        })
    }

    removedCompleted() {
        this.store.delete({completed:true},this[_filterItem].bind(this))
    }

    [_filterItem](force) {
        const route = this[_activeRoute]
        if (force || this[_lastActiveRoute] !== route) {
            this.store.find({
                '': {},
                'rest': {
                    completed: false
                },
                'completed': {
                    completed: true
                }
            }[route], this.view.showItems.bind(this.view))
        }

        this.store.count((total, completed, rest) => {
            this.view.setBodyVisible(total)
            this.view.setItemsLeft(rest)
            this.view.setClearButton(completed);
            this.view.setToggleAllBox (completed===total)
        })

        this[_lastActiveRoute] = this[_activeRoute]
    }
}