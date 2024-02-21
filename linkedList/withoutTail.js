class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size ++;
    }

    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node; 
        }
        this.size++;
    }

    insert(value, index) {
        const node = new Node(value);
        if(index < 0 || index > this.size) {
            return null;
        }
        if(index == 0) {
            this.prepend(value);
        } else {
            let prev = this.head;
            for(let i = 0; i < index-1; i++) {
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if(index < 0 || index > this.size) {
            return null;
        }
        let removed;
        if(index == 0) {
            removed = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index-1; i++) {
                prev = prev.next
            }
            removed = prev.next;
            prev.next = removed.next;
        }
        console.log("removed node: ",removed.value)
        this.size--;
    }

    remove(value) {
        if(this.isEmpty()) {
            return -1;
        }
        if(this.head.value === value) {
            this.head = this.head.next;
        } else {
            let prev = this.head;
            while(prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if(prev.next) {
                if(prev.next.next) {
                    prev.next = prev.next.next;
                } else {
                    prev.next = null;
                }
            } else {
                return -1;
            }
        }
        this.size--;
    }

    search(value) {
        if(this.isEmpty()) {
            return -1;
        } else {
            let curr = this.head;
            let tracker = 0;
            while(curr) {
                if(curr.value === value) {
                    return [curr.value, tracker];
                }
                tracker++;
                curr = curr.next;
            }
            return -1;
        }
    }

    reverse() {
        if(this.isEmpty()) {
            return -1;
        } else {
            let curr = this.head;
            let prev = null;
            while(curr) {
                let nxt = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nxt;
            }
            this.head = prev;
        }
    }

    print() {
        if(this.isEmpty()) {
            console.log("list is empty");
        }else{
            let curr = this.head;
            let res = "";
            while(curr) {
                res += `${curr.value} `;
                curr = curr.next;
            }
            console.log(res);
        }
    }
}

const list = new LinkedList();
list.insert(10,0);
list.insert(5,0);
list.insert(7,1);
list.insert(8,2);
console.log(list.getSize())
list.print();
list.remove(8);
list.print();
console.log(list.search())
list.reverse();
list.print();
