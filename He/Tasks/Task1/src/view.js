import * as util from './util'

const _getItemId = Symbol('getItemId') 



export default class View {
    constructor() {
        //根据qs找出所有相关的元素
        this.$todoInput = util.$qs('.app-main-input')
        this.$body = util.$qs('.app-item-list')
        this.$toggle = util.$qs('#toggle-all-items')
        this.$todoList = util.$qs('.todo-list')
        this.$leftCounter = util.$qs('#items-left-counter')
        this.$clearbutton = util.$qs('.clear-completed')
    }

    showItems(list) {
        this.$todoList.innerHTML = util.listTemplate(list)
    }

    deleteItem(id) {
        const potentialElement = util.$qs(`[data-id="${id}"]`)
        if(potentialElement) {
            this.$todoList.removeChild(potentialElement)
        }
    }

    updateItem(targetLabel) {
        let listItem = targetLabel.parentElement.parentElement;
        const updateInput=document.createElement("input")
        updateInput.value = targetLabel.innerText;
        updateInput.className = 'update'
        listItem.appendChild(updateInput);
        
        updateInput.focus()
    }

    saveUpdateItem(id,content) {
        const listItem = util.$qs(`[data-id="${id}"]`)
        const updateInput = util.$qs('input.update')
        
        listItem.removeChild(updateInput)
        util.$qs('label',listItem).textContent = content
    }

    setItemsLeft(countLeft) {
        this.$leftCounter.innerHTML = `还剩下${countLeft}件事没完成呢`
    }

    setClearButton(visible) {
        this.$clearbutton.style.display = !!visible ? 'block' : 'none'
    }

    setBodyVisible(visible) {
        this.$body.style.display = !!visible ? "block" : "none"
    }

    clearTodoInput() {
        this.$todoInput.value = ''
    }

    toggleCompleteItem(id,completed) {
        let targetItem = util.$qs(`[data-id="${id}"]`)
        if(!targetItem) {
            return;
        }
        util.$qs('input',targetItem).checked = completed;
    }

    setToggleAllBox(completed) {
        this.$toggle.checked = !!completed
    }


    bindRemoveCompleted(callback) {
        util.$on(this.$clearbutton,'click',callback)
    }

    bindInsertItem(callback) {
        util.$on(this.$todoInput,'change',({target})=>{
            const content = target.value.trim()
            if(content&&callback){
                callback(content)
            }
        })
    }

    bindDeleteItem(callback) {
        util.$listOn(this.$todoList,'click',({target})=>{
            callback(this[_getItemId](target))
        },'.remove-button')
    }

    bindUpdateItem() {
        util.$listOn(this.$todoList,'dblclick',({target})=>{
            this.updateItem(target)
        },'li label')
    }

    bindSaveUpdateItem(callback) {
        util.$listOn(this.$todoList,'blur',({target})=>{
            callback(this[_getItemId](target),target.value.trim())
        },'li .update',true)

        util.$listOn(this.$todoList, 'keypress', ({target, keyCode}) => {
            if (keyCode === 13) {
				target.blur();
			}
		},'li .update');
    }

    bindToggleCompleteItem(callback) {
        util.$listOn(this.$todoList,'click',({target})=>{
            callback(this[_getItemId](target),target.checked)
        },'.toggle')
    }

    bindToggleAll(callback) {
        util.$on(this.$toggle,'click',({target})=>{
            callback(target.checked)
        })
    }

    [_getItemId](element) {
        return parseInt(element.parentNode.dataset.id || element.parentNode.parentNode.dataset.id, 10);
    }
}