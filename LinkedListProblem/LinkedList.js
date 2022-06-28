class SNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {

    constructor(head = null) {
        this.head = head;
    }

    addNodeToLink(element) {
        let node = new SNode(element);

        let current;

        if(this.head == null) {

            this.head = node;

        } else {

            current = this.head;

            while(current.next) {
                current = current.next
            }

            current.next = node;
        }

    }

    reverseList() {
        let prev = null;
        let next = null;
        let current = this.head

        while(current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;

    }

    checkIfPalindrome() {


        let r1 = this.printList();

        this.reverseList();
        
        let r2 = this.printList();

        r1.toUpperCase()
        r2.toUpperCase()
        // console.log(r1)
        // console.log(r2)


        if(r1 === r2) {
            console.log("It is a Palindrome")
        } else {
            console.log("It is not a Palindrome")
        }
        


    }

    printList() {
        let curr = this.head;
        let string = "";

        while(curr) {
            string += curr.data + "";
            curr = curr.next;
        }
        // console.log(string)
        return string;
    }
        

}

let link = new LinkedList();

// link.addNodeToLink("L");
// link.addNodeToLink("I");
// link.addNodeToLink("N");
// link.addNodeToLink("K");

// link.addNodeToLink(1);
// link.addNodeToLink(2);
// link.addNodeToLink(3);
// link.addNodeToLink(4);
// link.addNodeToLink(5);


link.addNodeToLink("R");
link.addNodeToLink("A");
link.addNodeToLink("C");
link.addNodeToLink("E");
link.addNodeToLink("C");
link.addNodeToLink("A");
link.addNodeToLink("R");

console.log("-----------------------");

let elements = link.printList();
console.log("List: " + elements);

link.reverseList();

let reversedElements = link.printList();
console.log("Reversed List: " + reversedElements);

link.checkIfPalindrome();

console.log("-----------------------");




