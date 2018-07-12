import Template from "../example/src/template";

export function $qs(string, scope) {
    return (scope || document).querySelector(string);
}

export function $on(target, type, callback, capture) {
    target.addEventListener(type, callback, !!capture);
}

export function $listOn(target, type, handler, selector, capture) {
    const handleEventCallback = event => {
        const targetElement = event.target
        const potentialElements = target.querySelectorAll(selector)
        //所触发的目标必须是select以后符合的数组内的数组，才会触发handler
        for (let element of potentialElements) {
            if (element === targetElement) {
                handler.call(targetElement, event);
                break;
            }
        }
        
    }
    target.addEventListener(type, handleEventCallback, !!capture);
}





//用于本地缓存的类 实现增查删改和数量统计
export class Store {

    constructor(itemName) {
        const localStorage = window.localStorage
        this.getStorage = () => {
            return JSON.parse(localStorage.getItem(itemName)) || []
        }

        this.setStorage = (something) => {
            localStorage.setItem(itemName, JSON.stringify(something))
        }
    }

    insert(item, callback) {
        const todoList = this.getStorage()
        todoList.push(item);
        this.setStorage(todoList);
        if (callback) {
            callback()
        }
    }

    find(query, callback) {
        const todoList = this.getStorage()
        let attribute
        let foundSomething = todoList.filter(item => {
            for (attribute in query) {
                if (query[attribute] !== item[attribute]) {
                    return false;
                }
            }
            return true;
        })
        if (callback) {
            callback(foundSomething)
        }
    }

    delete(query, callback) {
        const todoList = this.getStorage()
        let attribute
        let restList = todoList.filter(item => {
            for (attribute in query) {
                if (query[attribute] !== item[attribute]) {
                    return true;
                    //保留跟删除条件不一样的item
                }
            }
            return false;
        })
        this.setStorage(restList)
        if (callback) {
            callback(restList)
        }
    }

    update(item, callback) {
        let id = item.id
        const todoList = this.getStorage()
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id == id) {
                for (let attribute in item) {
                    todoList[i][attribute] = item[attribute]
                }
            }
        }
        this.setStorage(todoList)
        if (callback) {

            callback()

        }
    }

    count(callback) {
        this.find({}, allList => {
            let total = allList.length
            let countCompleted = 0
            for (let i = 0; i < total; i++) {
                if (allList[i].completed) {
                    countCompleted++;
                }
            };
            callback(total, countCompleted, total - countCompleted)
        })
    }


}

const escapeForHTML = s => s.replace(/[&<]/g, c => c === '&' ? '&amp;' : '&lt;');
export function listTemplate(list) {
        return list.reduce((accumalte, item) => {
            return accumalte + `
            <li data-id="${item.id}" >
                <div class="todo-item">
                    <input class="toggle" type="checkbox" ${item.completed?"checked":""} >
                    <label>${escapeForHTML(item.content)}</label>
                    <button class="remove-button">删除</button>
                </div>
            </li>
            `
        }, '')
}