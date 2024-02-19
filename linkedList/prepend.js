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
console.log(list.isEmpty());
console.log(list.getSize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();

