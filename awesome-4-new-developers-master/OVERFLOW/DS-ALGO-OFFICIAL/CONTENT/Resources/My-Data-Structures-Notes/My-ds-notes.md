## Binary Trees

1. Explain and implement a Binary Tree.

- A tree is a collection of nodes and edges between them.
- It cannot have any cycles, which are edges that form a loop between nodes.
- We also only consider rooted trees in computer science, which is a tree that has one root node that is able to access all other nodes.
- For a tree to be a binary tree, each node can have a maximum of two children.
- It's important to be able to identify and explain tree terminology as well. If given a tree, be able to point out each component.
  - root: The single node of a tree that can access every other node through edges.
  - parent node: A node that is connected to lower nodes in the tree. If a tree only has one node, it is not a parent node because there are no children.
  - child node: A node that is connected to a higher node in the tree. Every node except for the root is a child node of some parent.
  - sibling nodes: Nodes that have the same parent.
  - leaf node: A node that has no children (at the ends of the branches of the tree)
  - internal node: A non-leaf node (aka a parent)
  - path: A series of nodes that can be traveled through edges.
  - subtree: A smaller portion of the original tree. Any node that is not the root node is itself the root of a subtree.
- Know the basics of each term

  - A non-empty tree has to have a root.
  - A tree doesn't have any parent nodes if there are no children.
  - What's the min/max number of parent and leaf nodes for a tree with 5 nodes?

    - Two extreme implementations:

    ![min-max-nodes-ll.png]

    - Implementing in a chain results in max number of parents and min number of leaves: 4 parents, 1 leaf

    ![min-max-nodes-balanced.png]

    - Implementing as a balanced tree results in min number of parents and max number of leaves: 2 parents, 3 leaves

- All that we need in order to implement a binary tree is a TreeNode class that can store a value and references to a left and right child. We can create a tree by assigning the left and right properties to point to other TreeNode instances:

```javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```

2. Identify the three types of tree traversals: pre-order, in-order, and post-order.

- Pre-order: Values are accessed as soon as the node is reached.
- In-order: Values are accessed after we have fully explored the left but before we explore the right branch.
- Post-order: Values are accessed after all of our children have been accessed.
- \*Breadth First: The previous three are types of Depth First Traversals. Breadth first accesses values of nodes by level, left to right, top to bottom.
- Given a tree, be able to determine the order of each traversal type:

  ![Number tree]

  - Breadth First: 20, 9, 24, 7, 11, 23, 27, 3, 10, 17, 36, 30
  - Pre-order: 20, 9, 7, 3, 11, 10, 17, 24, 23, 27, 36, 30
  - In-order: 3, 7, 9, 10, 11, 17, 20, 23, 24, 27, 30, 36
  - Post-order: 3, 7, 10, 17, 11, 9, 23, 30, 36, 27, 24, 20

3. Explain and implement a Binary Search Tree.

- A binary search tree is a binary tree with the added stipulation that all values to the left of a node are less than its value and all values to the right are greater than its value.
  - Example of a Binary Search Tree ![Binary Search Tree]
- Example of a BST with an insert method. You won't be asked to implement a removal:

```javascript
class BST {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }
}
```

## Graphs

1. Know the differences between graphs and trees

- A graph can:
  - Consist of any collection of nodes and edges (no limits on connections)
  - Have cycles
  - Have disconnected portions (a forest, with multiple trees, for example)
  - Be missing a root node (don't have to have one node that connects to everything)
- In a tree, we had an idea of children and parents, in a graph we have neighbors (no hierarchy)

2. What are three ways that we can implement a graph? What are each implementations' advantages or disadvantages?

- Adjacency Matrix - 2D Array
  - Visually clear what's going on
  - One axis (outside array) has an entry (inner array) for each node in the graph. If one node is connected to another node in the graph, our entry in the inner array is set to true. Otherwise the entry is false.

```javascript
let matrix = [
  /*          A       B       C       D       E       F   */
  /*A*/
  [true, true, true, false, true, false],
  /*B*/
  [false, true, false, false, false, false],
  /*C*/
  [false, true, true, true, false, false],
  /*D*/
  [false, false, false, true, false, false],
  /*E*/
  [true, false, false, false, true, false],
  /*F*/
  [false, false, false, false, true, true],
];
```

- Adjacency List - POJO
  - Object where every value in the graph has a key
  - Value for the key is an array with each other node that it is connected to (neighbors)
  - Easy to iterate through
  - Doesn't take up as much space as an Adjacency Matrix or Node
  - Can refer to the entire graph by referencing the object

```javascript
let list = {
  a: ["b", "c", "e"],
  b: [],
  c: ["b", "d"],
  d: [],
  e: ["a"],
  f: ["e"],
};
```

- Object-Oriented (ex: using Nodes)
  - Similar to our linked list or tree implementations
  - Track the value and the neighbors array as instance variables on the node
  - We don't have a reference to the overall graph with this implementation

```javascript
class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}
```

3. Given a graph in one of the above implementations, be able to traverse the graph in a breadth-first or depth-first manner.

- We can use recursion or iteration to traverse each node.
- We generally want to keep track of each node that we've visited already so that we don't get trapped in cycles. Easiest way to do this is to keep a Set variable that we update as we traverse to each node.
- The projects from W08D02 and their solutions are a great resource here.
  - Be comfortable with taking either an iterative or a recursive approach to traversing a graph, as well as being able to work with either an adjacency list (like in the friendsOf problem) or a node class (like in the breadthFirstSearch or maxValue problems).
  - Practice taking the implementation that you did in the project and converting it to a different implementation. You probably used recursion for friendsOf, so try using iteration with a stack array, etc.

4. Be able to make conclusions from these traversals

- Is it possible to get from node A to node B?
  - Here we're really implementing a search, like the breadthFirstSearch problem.
- What is the maximum/minimum value we can encounter if we start at node X?
  - Instead of returning a boolean, we want to compare values of nodes and return the appropriate value
    - If we do this recursively we can compare this node and to each of its neighbors values and return the maximum up the call stack.
    - If we do this iteratively, we can keep a currentMax variable as we traverse and update it if we find a new max value.
- etc.

## **Whiteboarding Tips and Tricks**

- Companies whiteboard because steps for solving wb problems are almost nearly identical to solving real-world practical situations.
  - They are looking to test a few things:
    - Can you think algorithmically? Think efficiently?
    - Are you a good communicator?
    - Can you code neatly and correctly?

**`Correct Steps`**

1. Repeat and clarify the problem.
2. Identify Edge Cases & I/O.
3. Pseudocode IF NECESSARY.
4. Implement Code.
5. Walk through an example input.
6. Det. Time and Space (Theta).

   - Time is expensive, space is cheap.
   - Ask interviewer is optimization is even necessary.

**`Strategies`**

- Hash Maps.
- Divide and Conquer DP Programming.
- Using Math Properties.
- **`Amortized Analysis`** : Method for analyzing a given algorithm's complexity, or how much a resource, especially time or or memory, it takes to execute.
- Keeping a Stack or Queue on the side to track values.
- Keep two pointers for the same iteration.
- Perform an operation twice.
- Sort the input.
- Approach the problem from the other end.
- Use binary numbers instead of decimal numbers.
- Use binary search instead of incrementation.

**If you have seen the problem before, just tell them you have**.

---

# **Notes**

## **Binary Trees**

![graphs](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/trees/images/graphs.png)

- **`Graph`** : A collection of nodes and any edges between those nodes. (Linked Lists and Trees are both considered subclasses of graphs)
- **`Tree`** : Graph that does not contain any cycles.
  - In CS we only refer to trees that are "`rooted`", or a tree where there exists a node that is accessible from every other node.
- **`Binary Tree`** : Tree where nodes have at most 2 children.

![tree](https://assets.aaonline.io/data_structures_algorithms/trees/images/graph_a.png)

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
```

- Common way to implement a binary tree is by using a node class with OOP.

**Basic Tree Terminology**

- **`Tree`** : Graph with no cycles.
  - Cycle is a path through edges that begins and ends at the same node.
  - In CS, trees must have roots!
- **`Binary Tree`** : Tree where nodes have at most 2 nodes.
- **`Root`** : The ultimate parent, the single node s tree that can access every other node through edges; root does not have a parent.
- **`Internal Node`** : Node that has children.
- **`Leaf`** : Node that does not have any children.
- **`Path`** : A series of nodes that can be traveled through edges.

**Traversing Trees**

- Trees can be traveresed in multiple ways: Depth-First or Breadth-First.
- Three common ways to go depth-first:
  - In-Order
  - Pre-Order
  - Post-Order
- **`Breadth First`** : Traversing level by level, visiting every node at each stage.

```js
        A
            /
            \
            B C /
            / \
        D E F
        A, B, C, D, E, F
```

- **`Depth-First`** :

```js
        A
            /
            \
            B C /
            / \
        D E F
        A, B, D, C, E, F
```

![pic](https://upload.wikimedia.org/wikipedia/commons/d/dc/Sorted_binary_tree_ALL.svg)

- **`Pre-Order Traversal`** :

  - F, B, A, D, C, E, G, I, H
  - Access data of the current Node
  - Recursively visit the left sub tree
  - Recursively visit the right sub tree

- **`In-Order Traversal`** :

  - A, B, C, D, E, F, G, H, I
  - Recursively visit the left sub tree
  - Access the data of the current node
  - Recursively visit the right sub tree

- **`Post-Order Traversal`** :

  - A, C, E, D, B, H, I, G, F
  - Recursively visit the left sub tree
  - Recursively visit the right sub tree
  - Access the data of the current node

**`Binary Search Trees`**

- A Binary Tree is a **Binary Search Tree** if:
  - The left subtree contains values less than the root.
  - AND the right subtree contains values greater than or equal to the root
  - AND the left subtree is a Binary Search Tree
  - AND the right subtree is a Binary Search Tree

![bst](https://assets.aaonline.io/data_structures_algorithms/binary_search_trees/images/bsts.png)

- BSTs are sorted Data Structures
- If this printing function is called on a BST, the values will be print out in ascending order.

```js
function inOrderPrint(root) {
  if (!root) return;

  inOrderPrint(root.left);
  console.log(root.val);
  inOrderPrint(root.right);
}
// BST 1: 42
// BST 2: 4, 5, 6
// BST 3: 1, 5, 7, 10, 16, 16
```

- The best BSTs are **height balanced**.

---

# **Notes**

## **Graphs**

- **Graph** : Any collection of nodes and edges, it is much more relaxed compared to other trees.
  - May lack a root node.
  - May have cycles.
  - May have any number of edges leaving a node.

![graph](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/graphs/images/graphs.png)

**GraphNode Class**

```js
class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

let a = new GraphNode("a");
let b = new GraphNode("b");
let c = new GraphNode("c");
let d = new GraphNode("d");
let e = new GraphNode("e");
let f = new GraphNode("f");
a.neighbors = [b, c, e];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];
```

- **Adjacency Matrix** : Mathematician's preferred way of representing a graph.

![adja](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/graphs/images/adj_matrix_graph.png)

```js
let matrix = [
  /*          A       B       C       D       E       F   */
  /*A*/
  [true, true, true, false, true, false],
  /*B*/
  [false, true, false, false, false, false],
  /*C*/
  [false, true, true, true, false, false],
  /*D*/
  [false, false, false, true, false, false],
  /*E*/
  [true, false, false, false, true, false],
  /*F*/
  [false, false, false, false, true, true],
];
```

- **Adjacency List** : Using an object to represent node labels.

```js
let graph = {
  a: ["b", "c", "e"],
  b: [],
  c: ["b", "d"],
  d: [],
  e: ["a"],
  f: ["e"],
};
```

---

## **Graph Traversal**

**Traversal with Graph Node**
**Depthfirst Recursion**

```js
class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

let a = new GraphNode("a");
let b = new GraphNode("b");
let c = new GraphNode("c");
let d = new GraphNode("d");
let e = new GraphNode("e");
let f = new GraphNode("f");
a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];
```

```js
function depthFirstRecur(node, visited = new Set()) {
  // if this node has already been visited, then return early
  if (visited.has(node.val)) return;

  // otherwise it hasn't yet been visited,
  // so print it's val and mark it as visited.
  console.log(node.val);
  visited.add(node.val);

  // then explore each of its neighbors
  node.neighbors.forEach((neighbor) => {
    depthFirstRecur(neighbor, visited);
  });
}
```

```js
function depthFirstIter(node) {
  let visited = new Set();
  let stack = [node];

  while (stack.length) {
    let node = stack.pop();

    // if this node has already been visited, then skip this node
    if (visited.has(node.val)) continue;

    // otherwise it hasn't yet been visited,
    // so print it's val and mark it as visited.
    console.log(node.val);
    visited.add(node.val);

    // then add its neighbors to the stack to be explored
    stack.push(...node.neighbors);
  }
}
```

**Traversal with Adjacency List**

```js
let graph = {
  a: ["b", "c", "e"],
  b: [],
  c: ["b", "d"],
  d: [],
  e: ["a"],
  f: ["e"],
};
```

```js
function depthFirst(graph) {
  let visited = new Set();

  for (let node in graph) {
    _depthFirstRecur(node, graph, visited);
  }
}

function _depthFirstRecur(node, graph, visited) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  graph[node].forEach((neighbor) => {
    _depthFirstRecur(neighbor, graph, visited);
  });
}

depthFirst(graph);
```

# **Notes**

## **Network Knowledge**

## **OSI Network Model**

- **`OSI`** : The Open Systems Interconnection reference model is a well known Network Model created in the UK that has both conceptual layers **and** suggested protocols for each.

  - There are seven layers to the OSI Model.

![osilayer](https://assets.aaonline.io/Module-Web/network/image-network-models-osi.svg)

- **`Application`** : Includes information used by client-side software, data from this later interacts directly with applications. (i.e. HTTP)
- **`Presentation`** : The syntax later that converts data from machine-readable to human-readable. Includes data compression, encryption, and character encoding. (i.e. JPEG & GIF)
- **`Session`** : Includes protocols responsible for authentication and data continuity. Includes authorization or re-establishing a dropp connection. (i.e. RPC (Remote Procedure Call))
- **`Transport`** : Utilization of transport protocols (i.e. TCP and UDP)
- **`Network`** : Basically the internet layer (i.e. IP)
- **`Data Link`** : Deal with connections from one machine's network interface to another. (i.e. ethernet)
- **`Physical`** : Translating raw electrical signals to bits & bytes of data. (i.e. Wi-Fi & DSL)

* It is important to remember that OSI Model is highly conceptual, it's practical uses are limited.
* TCP/IP is much more practical compared to OSI, but it is purely practical.

---

## **TCP/IP Model**

- **`Reference Model`** : A High-level overview of a complex topic provided by an organization that manages it.

**Layers of the TCP/IP Model**

![tcpiplayer](https://assets.aaonline.io/Module-Web/network/image-network-models-tcp-ip.svg)

- **`Application`** : Includes protocols related to user-facing data. Anything that is transmitted from the Transport layer is considered Application Layer Data (i.e. HTTP & FTP)
- **`Transport`** : TCP & UDP.
- **`Internet`** : Connects separate networks together (IP)
- **`Link`** : Lower-level communication standards.
- **`Physical?`** : There is a supposed fifth layer that cinludes all the electrical concepts that span across wires, but it is not officially stated.

![encap](https://assets.aaonline.io/Module-Web/network/image-network-models-encapsulation.svg)

- We can think of the layers of our reference model as being **encapsulated**.

---

## **Binary and Hexidecimal**

- **`Binary`** : Number expressed in the base-2 numeral system or binary numeral system.
  - **`Base`** : Number System, computers use a Base 2 NS.
- **`CPU`** : Central Processing Unit, an electronic circuitry within a computer that executes instructions that make up a computer program.

- It is easy to understand binary numbers if you remember the bases.
- 1, 2, 4, 8, 16, 32, 64, 128...etc.

- **`Bit`** : A single digit represented by either 1 (ON) or 2 (OFF).

![pic](https://i.gyazo.com/413dd89d209c0b2a4d10d8c1f6fe40b6.png)

- **`Byte`** : Sequence of 8 Bits.

- **`Hexadecimal`** : Base 16, useful numeric system due to it making it easier for us to read binary.
  - Helps to make up for base 10 only going from 0 - 9, adds in A, B, C, D, E, F.
  - You will sometimes see hexadecimals pre-pended with a `0x`.
  - `FF = 255 = 11111111 = 1 byte`

```
hexadecimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,  A,  B,  C,  D,  E,  F
decimal:     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
```

```
Regular Numbers: 4 8 15 16 23 42
Binary: 00000100 00001000 00001111 00010000 00010111 00101010
Hexadecimal: 04 08 0F 10 17 2A
```

- If you provide a numerical base in JS in the .toString() method you can convert things to binary and decimal. (parseInt can also be used)

```js
Number(42).toString(16); // 2a
Number(42).toString(2); // 101010
```

```js
parseInt("101010", 2); // 42
parseInt("2A", 16); // 42
```

---

## **Internet Protocol**

- **`TCP`** : Transmission Control Protocol.
  - TCP is fault tolerant and end-to-end.
  - If data transmission fails it can be cached and re-sent.
  - No single central system that can take down the entire network.
- **`IP`** : Internet Protocol.
- **`Internet`** : A series of interconnected networks sharing data.
- **`Packet`** : Format that IP data is packaged in.
  - Contains metadata in headers, and body content.
- **`Pack-Switching`** : When a message is split up into separate 'packets', delivered to a destination, and reassembled as appropriate.

  > A Byte is 8 Bits

![ip4](https://assets.aaonline.io/Module-Web/network/image-ip-ipv4-headers.svg)

- IPV4
- IPv4 is still the most commonly used protocol version online.

![ipv6](https://assets.aaonline.io/Module-Web/network/image-ip-ipv6-headers.svg)

- IPV6
- Was created because we are running out of IP Addresses.
- **`Version`** : Binary representation of the version #.
- **`Traffic Class`** : Used to Identify different types of packets.
- **`Flow Label`** : An experimental option used for adding packet sequencing into IP.
- **`Payload Length`** : Let's the receivers know how large the data in the packet will be.
- **`Next Header`** : Usually identifies the protocol type of the packet's data.
- **`Hop Limit`** : Means of preventing packets from being passed around routers forever.
- **`Source Address`** : Where the pack originated.
- **`Destination Address`** : Where the packet is heading.

  > All of the headers have a fixed length of 40 bytes.

**Special Addresses**

- **Local Host** : Loopback Address, or the identifier for your current machine.
  - `127.0.0.1`
- **ALl-Interfaces Address** : Used to catch any incoming requests regardless of the intended destination.
  - `0.0.0.0`

---

## **Transport Protocols**

- Transport Protocols act as our delivery person.
- IP is concerned with machine-to-machine communication.
- HTTP is designed for application-to-application communication.
- **`Port`** : Virtual interfaces that allow a single device to host lot's of different applications & services.
- **`TCP`** : Transmission Control Protocol, the most common transport protocol.

  - Connection-oriented protocol.
  - Reliable protocol because the segments cannot be lost.
  - Heavy protocol to use (hence, sometimes there is buffering)

- **`UDP`** : User Datagram Protocol.
  - Unreliable protocol.
  - Connection-less and provides no verification if data has been received.
  - Up to the sender/recipient to manage expectati

---

## **DNS**

- **`DNS`** : Domain Name System is a distributed appraoch to providing easily-understood names for internetworked devices. (Similar to a phonebook)

  - Invented as a way to distribute the work to numerous organizations, lightening the load and allowing much more rapid growth.

- **`Domain`** : A website's domain refers to the 'friendly' name for the website's host, or the server providing the site's content.

![url](https://assets.aaonline.io/Module-Web/network/image-ip-dns-domain.svg)

- Top Level Domain the last part of the domain (.com, .net, .org)
- Second Level Domain (Name of the website)
- Subdomain (www)

* **`Resolution`** : Process of working out which name server is needed.
  - During resolving, we work from right to left.

**DNS Records**

- **`Zone File`** : Text file containing, host names, IP Addresses, and resource types.
- Common DNS Record Types:
  - **`SOA`** : Start of Authority, let's use know what name server is the primary authority (**`THE MINIMUM REQUIREMENT IN A ZONE FILE`**)
  - **`NS`** : Keeps us connected to our zone by pointing to name servers.
  - **`A/AAAA`** : A = Domain Name to IPv4 & AAAA = Domain Name to IPv6
  - **`CNAME`** : Links Domain name to Domain Name.
  - **`MX`** : Mail Exchanger, used by e-mail clients.
  - **`TTL`** : Time to live, measure of how long a record should be cached by a DNS name server.

---

## **Network Hardware**

- **HUB** : Simplest networking device aka a Signal Splitter.

  - Cheap and found in older networks.
  - Hubs do not do any filtering, every single data packet is sent to every single device all the time.
  - No one uses them anymore.

- **Switches: Traffic Control** : Intelligent Hubs, track devices connected to them, help manage network load, and can manage separate internal networks with ease.
  - The Max Address Table is the largest difference from hubs.
  - **`Flood`** : If a destination address is unknown, the switch will flood received data out to all connect devices.
  - **`Forward`** : If the destination is known, it will send data directly to that device.
  - **`Filter`** : When data is dropped entirely from a transfer.
- **`Routers`** : Connect separate networks with each other.
  - Participate in a process called NAT (Network Address Translation)

---

## Big O Notation

### time complexity

it allow us to talk formally about how the runtime of an algorithm grows as the input grows.

n = number of operation the computer has to do can be:
f(n) = n
f(n) = n^2
f(n) = 1

f(n) = could be something entirely different !

![](./assets/ece920b.png)

O(n):

```typescript
function addUpToSimple(n: number) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}
```

O(1):

```typescript
function addUpComplex(n: number) {
  return (n * (n + 1)) / 2;
}
```

O(n): maybe thinking O(2n) but we see big picture! BigONotation doesn't care about precision only about general trends _linear? quadric? constant?_

```typescript
function printUpAndDown(n: number) {
  console.log("Going up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("Going down");
  for (let j = n - 1; j > 0; j--) {
    console.log(j);
  }
}
```

O(n^2)

```typescript
function printAllPairs(n: number) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = 0; j < n; j++) {
      console.log(j);
    }
  }
}
```

O(n) : cuz as soon as n grows complexity grows too

```typescript
function logAtLeastFive(n: number) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
```

O(1)

```typescript
function logAtMostFive(n: number) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
```

### space complexity

Rules of Thumb

- most primitive _booleans numbers undefined null_ are constant space.
- strings and reference types like objects an arrays require O(n) space _n is string length or number of keys_

O(1)

```typescript
function sum(arr: number[]) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
}
```

O(n)

```typescript
function double(arr: number[]) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i] * 2);
  }
  return newArr;
}
```

### quick note around object, array through BigO lens!

object:

```typescript
const person = { name: "John", age: 22, hobbies: ["reading", "sleeping"] };

Object.keys(person); // ["name", "age", "hobbies"] O(n)
Object.values(person); // ["John", 22, Array(2)] O(n)
Object.entries(person); // [Array(2), Array(2), Array(2)] O(n)
person.hasOwnProperty("name"); // true O(1)
```

array:
_push() and pop()_ are always faster from _unshift() and shift()_ cuz inserting or removing element from beginning of an array needs reIndexing all elements

## Common Patterns

### frequency counter

O(n^3)

```typescript
function same(arrOne: number[], arrTwo: number[]): boolean {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let element of arrOne) {
    // for O(n)
    if (!arrTwo.includes(element ** 2)) {
      // includes cuz iterate over all indexes O(n)
      return false;
    }
    arrTwo.splice(arrTwo.indexOf(element ** 2), 1); // indexOf cuz iterate over all indexes O(n)
  }
  return true;
}
```

frequencyCounter:

O(n)

```typescript
function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    const sqrtKey = parseInt(key, 10) ** 2;
    if (
      !(sqrtKey in frequencyCounter2) || // interesting ** in ** check if object contains key
      frequencyCounter2[sqrtKey] !== frequencyCounter1[key]
    ) {
      return false;
    }
  }

  return true;
}
```

O(n)

```typescript
// approach one
function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCount1 = {};
  const frequencyCount2 = {};

  for (let value of str1) {
    frequencyCount1[value] = (frequencyCount1[value] || 0) + 1;
  }
  for (let value of str2) {
    frequencyCount2[value] = (frequencyCount2[value] || 0) + 1;
  }

  for (let key in frequencyCount1) {
    if (frequencyCount1[key] !== frequencyCount2[key]) {
      return false;
    }
  }

  return true;
}

// approach two
function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCount = {};

  for (let i = 0; i < str1.length; i++) {
    const currentElement = str1[i];

    frequencyCount[currentElement]
      ? (frequencyCount[currentElement] += 1)
      : (frequencyCount[currentElement] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const currentElement = str2[i];

    if (!frequencyCount[currentElement]) {
      return false;
    } else {
      frequencyCount[currentElement] -= 1;
    }
  }

  return true;
}
```

## multiple pointers

O(n^2)

```typescript
function sumZero(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
```

multiple pointers:

O(n)

```typescript
function sumZero(arr: number[]) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
```

O(n)

```typescript
// my approach

function countUniqueValues(arr: number[]): number {
  let pointer = 0;
  let count = 0;
  while (pointer < arr.length) {
    if (arr[pointer] === arr[pointer + 1]) {
      pointer++;
    } else {
      count++;
      pointer++;
    }
  }

  return count;
}

// steele approach

function countUniqueValues(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
```

### sliding window

O(n^2)

```typescript
function maxSubArraySum(arr: number[], n: number): number | null {
  if (arr.length < n) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let tmp = 0;
    for (let j = 0; j < n; j++) {
      tmp += arr[i + j];
    }

    if (tmp > max) {
      max = tmp;
    }
  }
  return max;
}
```

O(n)

sliding window:

```typescript
function maxSubArraySum(arr: number[], n: number): number | null {
  if (arr.length < n) {
    return null;
  }

  let maxSum = 0;
  let tmpSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  for (let i = n; i < arr.length; i++) {
    tmpSum = tmpSum - arr[i - n] + arr[i];
    maxSum = Math.max(tmpSum, maxSum);
  }
  return maxSum;
}
```

### divide and conquer

linearSearch

O(n)

```typescript
function linearSearch(arr, val): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
```

divide an conquer:

binarySearch

O (Log n)

```typescript
function binarySearch(sortedArr: number[], value: number): number {
  let min = 0;
  let max = sortedArr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (sortedArr[middle] < value) {
      min = middle + 1;
    } else if (sortedArr[middle] > value) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
```

## Recursion

a process that calls itself

quick note around callStack

```typescript
function wakeUp() {
  // callStack [wakeUp]
  takeShower();
  eatBreakfast();
  console.log("Ready to go ... ");
} // callStack []

function takeShower() {
  // callStack [takeShower, wakeUp]
  console.log("taking shower");
} // callStack[wakeUp]

function eatBreakfast() {
  // callStack [eatBreakfast, wakeUp]
  const meal = cookBreakFast();
  console.log(`eating ${meal}`);
} // callStack [wakeUp]

function cookBreakFast() {
  // callStack [cookBreakFast, eatBreakfast, wakeUp]
  const meals = ["Cheese", "Protein Shake", "Coffee"];
  return meals[Math.floor(Math.random() * meals.length)]; // callStack [eatBreakFast, wakeUp]
}

wakeUp();
```

two essential part of recursive functions

- base case : end of the line
- different input : recursive should call by different piece of data

```typescript
function sumRange(num: number) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function factorial(num: number) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
```

helper method recursion vs pure recursion

```typescript
// helper method recursion approach
function collectOdd(arr: number[]) {
  const result = [];

  function helper(helperArr: number[]) {
    if (!helperArr.length) {
      return;
    }

    if (helperArr[0] % 2 !== 0) {
      result.push(helperArr[0]);
    }

    helper(helperArr.slice(1));
  }

  helper(arr);

  return result;
}

// pure recursion approach
function collectOdd(arr: number[]): number[] {
  let result = [];

  if (!arr.length) {
    return result;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  result = collectOdd(result.concat(arr.slice(1)));
  return result;
}
```

## Searching Algorithms

### linear search

_indexOf() includes() find() findIndex()_ all this methods doing linear search behind the scene

O(n)

```typescript
function linearSearch(arr: number[], value: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
    return -1;
  }
}
```

### binary search

O(Log n)

```typescript
function binarySearch(sortedArr: number[], value: number): number {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const middle = Math.round((right + left) / 2);

    if (sortedArr[middle] > value) {
      right = middle - 1;
    } else if (sortedArr[middle] < value) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}
```

### naive string search

O(n^2)

```typescript
function naiveStringSearch(long: string, pattern: string): number {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== long[i + j]) {
        break;
      }
      if (j === pattern.length - 1) {
        count++;
      }
    }
  }

  return count;
}
```

## Sorting Algorithms

### array.sort()

array.sort(cb?) will turn all values to _string_ then sort it based on it's _unicode_

```typescript
["a", "c", "b", "f", "d"].sort(); // (5) ["a", "b", "c", "d", "f"]
[1, 10, 6, 8, 2, 3, 5].sort(); //(7) [1, 10, 2, 3, 5, 6, 8]

/* 
also receive callback function by two arguments:
    a: previous number 
    b: next number 

*/
// if callback return NEGATIVE number a will placed before b
[1, 10, 6, 8, 2, 3, 5].sort((a, b) => a - b); // (7) [1, 2, 3, 5, 6, 8, 10]

// if callback return POSITIVE number a will placed after b
(7)[(1, 2, 3, 5, 6, 8, 10)].sort((a, b) => b - a); // (7) [10, 8, 6, 5, 3, 2, 1]

// if callback return ZERO a and b will placed at the same position
```

## Quadric

### bubble sort

![](./assets/Sorting_bubblesort_anim.gif)

general: O(n^2)
nearlySortedData: O(n)

```typescript
function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let noSwap = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

// or

function bubbleSort(arr: number[]): number[] {
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}
```

### selection sort

![](./assets/Selection-Sort-Animation.gif)

O(n^2)

```typescript
function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
```

### insertion sort

![](./assets/Insertion-sort-example-300px.gif)

general: O(n^2)
nearlySortedData: O(n)

```typescript
function insertionSort(arr) {
  var currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
```

### quadric sorting algorithms comparison

|   Algorithm    | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (worst) | Space Complexity |
| :------------: | :--------------------: | :-----------------------: | :---------------------: | :--------------: |
|  bubble sort   |          O(n)          |          O(n^2)           |         O(n^2)          |       O(1)       |
| insertion sort |          O(n)          |          O(n^2)           |         O(n^2)          |       O(1)       |
| selection sort |         O(n^2)         |          O(n^2)           |         O(n^2)          |       O(1)       |

## Fancy

### merge sort

![](./assets/Merge-sort-example-300px.gif)

O(n Log n)

```typescript
// merge two sorted array
function merge(arr1: number[], arr2: number[]): number[] {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}
```

### quick sort

![](./assets/Quicksort.gif)

in following implementation we always assume _first item_ as pivot

general: O(n Log n)
sorted: O(n^2)

```typescript
// place pivot in the right index and return pivot index
function pivot(arr: number[], start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
    }
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
}

function quickSort(arr: number[], start = 0, end = arr.length - 1) {
  if (left < right) {
    const pivot = pivot(arr, start, end);

    // left
    quickSort(arr, start, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}
```

### radix sort

![](./assets/3C7DDB59DF2D21B287E42A7B908409CB.gif)

O(nk)
n: the number of items we sorting
k: average length of those numbers

```typescript
// get the actual number at the given index
function getDigit(num: number, i: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// get number length
function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// return number by most length
function mostDigits(arr: number[]): number {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}
function radixSort(arr: number[]): number[] {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      digitBuckets[getDigit(arr[j], k)].push(arr[j]);
    }

    arr = [].concat(...digitBuckets);
  }
  return arr;
}
```

### fancy sorting algorithms comparison

| Algorithm  | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (worst) | Space Complexity |
| :--------: | :--------------------: | :-----------------------: | :---------------------: | :--------------: |
| merge sort |       O(n Log n)       |        O(n Log n)         |       O(n Log n)        |       O(n)       |
| quick sort |       O(n Log n)       |        O(n Log n)         |         O(n^2)          |     O(Log n)     |
| radix sort |         O(nk)          |           O(nk)           |          O(nk)          |     O(n + k)     |

## Data Structure

### complexity comparison

|   DataStructure    | Insertion |                         Removal                          |                 Searching                 | Access |
| :----------------: | :-------: | :------------------------------------------------------: | :---------------------------------------: | :----: |
| Singly Linked List |   O(1)    | bestCase(very beginning): O(1) worstCase(very end): O(n) |                   O(n)                    |  O(n)  |
| Doubly Linked List |   O(1)    |                           O(1)                           | O(n) it is faster than Singly Linked List |  O(n)  |
|       Stack        |   O(1)    |                           O(1)                           |                   O(n)                    |  O(n)  |
|       Queue        |   O(1)    |                           O(1)                           |                   O(n)                    |  O(n)  |
| Binary Search Tree | O( Log n) |                            -                             |                 O(Log n)                  |   -    |
|    Binary Heap     | O( Log n) |                        O( Log n)                         |                  O( n )                   |   -    |
|    Hash Tables     |  O( 1 )   |                          O( 1 )                          |                     -                     | O( 1 ) |

## Singly Linked list

```typescript
class _Node {
  constructor(public value: any) {}
  public next: _Node | null = null;
}

class SinglyLinkedList {
  private _length: number = 0;
  private head: _Node | null = null;
  private tail: _Node | null = null;

  get length() {
    return this._length;
  }

  get print(): null | _Node[] {
    if (!this._length) return null;

    const arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  public push(value: any): SinglyLinkedList {
    const node = new _Node(value);

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this._length += 1;

    return this;
  }

  public pop(): _Node | null {
    if (!this.head) return null;

    let currentNode = this.head;

    if (!currentNode.next) {
      this.head = null;
      this.tail = null;
      this._length -= 1;
      return currentNode;
    }
    while (currentNode.next && currentNode.next.next) {
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    this.tail.next = null;
    this._length -= 1;
    return currentNode.next as _Node;
  }

  public unShift(value: any): SinglyLinkedList {
    const currentHead = this.head;

    this.head = new _Node(value);

    if (currentHead) {
      this.head.next = currentHead;
    } else {
      this.tail = this.head;
    }
    this._length += 1;
    return this;
  }

  public shift(): _Node | null {
    if (!this.head) return null;

    const currentHead = this.head;
    this.head = currentHead.next;
    this._length -= 1;

    if (currentHead === this.tail) this.tail = null;

    return currentHead;
  }

  public get(index: number): _Node | null {
    if (index < 0 || index >= this._length) return null;

    let currentNode = this.head;
    for (let j = 0; j < index; j++) {
      if (currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  public set(index: number, value: any): _Node | null {
    const node = this.get(index);
    if (node) {
      node.value = value;
    }
    return node;
  }

  public insert(index: number, value: any): SinglyLinkedList | null {
    if (index < 0 || index >= this._length) {
      return null;
    } else if (index === 0) {
      return this.unShift(value);
    } else if (index === this._length) {
      return this.push(value);
    } else {
      const prevNode = this.get(index - 1);

      if (prevNode) {
        const newNode = new _Node(value);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this._length += 1;

        return this;
      }
      return prevNode;
    }
  }

  public remove(index: number): _Node | null {
    if (index === 0) {
      return this.shift();
    } else if (index === this._length - 1) {
      return this.pop();
    } else {
      const prevNode = this.get(index - 1);
      const currentNode = this.get(index);
      if (prevNode && currentNode) {
        prevNode.next = currentNode.next;
        this._length -= 1;
      }
      return currentNode;
    }
  }

  public reverse(): SinglyLinkedList | false {
    if (this._length <= 1) return false;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next: _Node | null;
    let prev: _Node | null = null;
    for (let i = 0; i < this._length; i++) {
      if (node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
    }
    return this;
  }
}
```

## Doubly Linked List

```typescript
class _Node {
  public next: _Node | null = null;
  public prev: _Node | null = null;

  constructor(public value: any) {}
}

class DoublyLinkedList {
  private head: _Node | null = null;
  private tail: _Node | null = null;

  private _length = 0;

  get length() {
    return this._length;
  }

  get print(): null | _Node[] {
    if (!this._length) return null;

    const arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  public push(value: any): DoublyLinkedList {
    const node = new _Node(value);

    if (!this.tail) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this._length += 1;
    this.tail = node;

    return this;
  }

  public pop(): _Node | null {
    if (!this.tail) {
      return null;
    }

    const currentTail = this.tail;
    if (currentTail.prev) {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this._length -= 1;
    return currentTail;
  }

  public shift(): null | _Node {
    if (!this.head) {
      return null;
    }

    const currentHead = this.head;
    if (currentHead.next) {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    } else {
      return this.pop();
    }

    this._length -= 1;
    return currentHead;
  }

  public unshift(value: any): DoublyLinkedList {
    if (!this.head) {
      return this.push(value);
    }

    const node = new _Node(value);
    const currentHead = this.head;

    this.head = node;
    this.head.next = currentHead;
    currentHead.prev = this.head;

    this._length += 1;
    return this;
  }

  public get(index: number): null | _Node {
    if (index < 0 || index >= this._length) return null;

    let currentNode: _Node | null = null;

    if (index < Math.floor(this._length / 2)) {
      // iterate from head to tail

      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        if (currentNode && currentNode.next) {
          currentNode = currentNode.next;
        }
      }
    } else {
      // iterate from tail to head

      currentNode = this.tail;
      for (let i = this._length - 1; i > index; i--) {
        if (currentNode && currentNode.prev) {
          currentNode = currentNode.prev;
        }
        return currentNode;
      }
    }

    return currentNode;
  }

  public set(index: number, value: any): _Node | null {
    const node = this.get(index);
    if (node) {
      node.value = value;
    }
    return node;
  }

  public insert(index: number, value: any): DoublyLinkedList | null {
    if (index < 0 || index > this._length) {
      return null;
    } else if (index === 0) {
      return this.unshift(value);
    } else if (index === this._length) {
      return this.push(value);
    } else {
      const prevNode = this.get(index - 1);
      const nextNode = this.get(index);

      if (prevNode && nextNode) {
        const newNode = new _Node(value);

        prevNode.next = newNode;
        (newNode.prev = prevNode), (newNode.next = nextNode);
        nextNode.prev = newNode;
      }
    }
    this._length += 1;
    return this;
  }

  public remove(index: number): DoublyLinkedList | null {
    if (index < 0 || index > this._length) {
      return null;
    } else if (index === 0) {
      this.shift();
    } else if (index === this._length - 1) {
      this.pop();
    } else {
      const node = this.get(index);

      if (node && node.prev && node.next) {
        (node.prev.next = node.next), (node.next.prev = node.prev);
        (node.next = null), (node.prev = null);
      }
      this._length -= 1;
    }
    return this;
  }
}
```

## Stacks

LIFO
last in first out

```typescript
// implement stack using array
const stack = [1, 2, 3];
stack.push(4); // [1,2,3,4]
stack.pop(); // [1,2,3]
// stacks just have push and pop
stack.unshift(0); // [0,1,2,3]
stack.shift(); // [1,2,3]
```

```typescript
// implementing stack using singly linked list
class _Node {
  public next: _Node | null = null;

  constructor(public value: any) {}
}

class Stack {
  private first: _Node | null = null;
  private last: _Node | null = null;

  private _length = 0;
  get length(): number {
    return this._length;
  }

  push(value: any): Stack {
    const node = new _Node(value);
    const currentFirst = this.first;

    (this.first = node), (this.first.next = currentFirst);

    if (!currentFirst) {
      this.last = node;
    }

    this._length += 1;
    return this;
  }

  pop(): _Node | null {
    const currentFirst = this.first;
    if (currentFirst) {
      if (this.first === this.last) this.last = currentFirst.next;
      this.first = currentFirst.next;
      this._length -= 1;
    }
    return currentFirst;
  }
}
```

## Queue

FIFO
first in first out

```typescript
// implementing queue using array
const q = [];
q.push(1);
q.push(2);
q.shift(1); // out first items first
// or
q.shift(1);
q.shift(2);
q.pop(); // out first items first
```

```typescript
// implementing queue using singly linked list
class _Node {
  public next: _Node | null = null;

  constructor(public value: any) {}
}

class Queue {
  private first: _Node | null = null;
  private last: _Node | null = null;

  private _length = 0;
  get length(): number {
    return this._length;
  }

  enqueue(value: any): Queue {
    const node = new _Node(value);
    if (!this.last) {
      (this.first = node), (this.last = node);
    } else {
      this.last.next = node;
      this.last = node;
    }

    this._length += 1;
    return this;
  }

  dequeue(): _Node | null {
    const currentFirst = this.first;
    if (currentFirst) {
      if (this.first === this.last) this.last = null;
      this.first = currentFirst.next;
      this._length -= 1;
    }

    return currentFirst;
  }
}
```

## Tree

### terminology

- root : top node of tree
- child : a node directly connected to another node when moving away from root
- parent : the converse notion of a child
- sibling : a group of nodes with the same parent
- leaf : a child with no children
- edge : connection from two node

### binary search tree

- every parent node has at most **two** children
- every node to the **left** of parent node is always **less** than the **parent**
- every node to the **right** of parent node is always **greater** than the **parent**

```typescript
class _Node {
  constructor(public value: number) {}

  public left: _Node | null = null;
  public right: _Node | null = null;
}
class BinarySearchTree {
  public root: _Node | null = null;

  public insert(value: number): BinarySearchTree | null {
    const node = new _Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let currentNode: _Node = this.root;
      do {
        if (value === currentNode.value) return null;

        if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = node;
            break;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = node;
            break;
          }
        }
      } while (currentNode);
    }
    return this;
  }

  public have(value: number): boolean {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else {
        if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
          }
          break;
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
          }
          break;
        }
      }
    }
    return false;
  }
}
```

### tree traversal

there is two main strategies to traversal a tree : **Breadth-first-search** and **Depth-first-search**

```typescript
class _Node {
  constructor(public value: number) {}

  public left: _Node | null = null;
  public right: _Node | null = null;
}
class BinarySearchTree {
  public root: _Node | null = null;

  public insert(value: number): BinarySearchTree | null {
    const node = new _Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let currentNode: _Node = this.root;
      do {
        if (value === currentNode.value) return null;

        if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = node;
            break;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = node;
            break;
          }
        }
      } while (currentNode);
    }
    return this;
  }

  public have(value: number): boolean {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else {
        if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          }
          break;
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
          }
          break;
        }
      }
    }
    return false;
  }
  /* 
    breadth first search (bfs) : traverse tree horizontally
*/
  public bfs(): _Node[] {
    const visited: _Node[] = [];
    if (this.root) {
      const q: _Node[] = [this.root];
      while (q.length) {
        if (q[0].left) q.push(q[0].left);
        if (q[0].right) q.push(q[0].right);

        visited.push(q[0]), q.shift();
      }
    }
    return visited;
  }
  /*
    depth first search (dfs) : traverse tree vertically
    following contains three dfs searching methods:

    1. preOrder : add node => going to left and add left => going to right and add right 
    2. postOrder : going to left and add left => going to right and add right => going to node and add node 
    3. inOrder : going to the left and add left => add node => going to the right and add right

     */
  public dfsPreOrder(): _Node[] {
    const visited: _Node[] = [];
    if (this.root) {
      (function traverse(node: _Node): void {
        visited.push(node);

        if (node.left) {
          traverse(node.left);
        }
        if (node.right) {
          traverse(node.right);
        }
      })(this.root);
    }

    return visited;
  }

  public dfsPostOrder(): _Node[] {
    const visited: _Node[] = [];

    if (this.root) {
      (function traverse(node: _Node): void {
        if (node.left) {
          traverse(node.left);
        }
        if (node.right) {
          traverse(node.right);
        }

        visited.push(node);
      })(this.root);
    }
    return visited;
  }

  dfsInOrder(): _Node[] {
    const visited: _Node[] = [];

    if (this.root) {
      (function traverse(node: _Node) {
        if (node.left) {
          traverse(node.left);
        }

        visited.push(node);
        f;

        if (node.right) {
          traverse(node.right);
        }
      })(this.root);
    }

    return visited;
  }
}
```

### traversal comparison

**depth-first** _vs_ **breadth-first** : they both **timeComplexity is same** but **spaceComplexity is different** if we got **a wide tree** like this:

![](./assets/Z20M5iE.png)

**breadth-first take up more space.** cuz we adding more element to queue.

if we got **a depth long tree** like this:

![](./assets/Binary-search-tree-insertion-When-a-sequence-of-data-f1-3-4-6-5-7-9-8-2-g.png)

**depth-first take up more space.**

<hr/>

**potentially use cases for dfs variants (_preOder postOrder inOrder_)**
preOrder is useful when we want a clone of tree.
inOrder is useful when we want data in order that it's stored in tree.

## Binary heaps

### terminology

- a binary heap is as compact as possible (all the children of each node are as full as they can be and left children and filled out first)
- each parent has at most two children

**Max Binary Heap**:

- **parent** nodes are always greater than **child** nodes but there is no guarantees between sibling

**Min Binary Heap**:

- **child** nodes are always greater than **parent** nodes but there is no guarantees between sibling

### binary heap parent and child relations

![](./assets/binaryHeapsParentAndChildRelation.jpg)

```typescript
class MaxBinaryHeap {
  private _values: number[] = [];
  get values(): number[] {
    return this._values;
  }

  private sinkingUp(value: number): void {
    let valueIndex = this._values.length - 1;
    while (valueIndex > 0) {
      const parentIndex = Math.floor((valueIndex - 1) / 2);
      const parent = this._values[parentIndex];

      if (value <= parent) break;

      this._values[parentIndex] = value;
      this._values[valueIndex] = parent;

      valueIndex = parentIndex;
    }
  }
  private sinkingDown(): void {
    let targetIndex = 0;
    while (true) {
      let leftChildIndex = targetIndex * 2 + 1,
        rightChildIndex = targetIndex * 2 + 2;

      let target = this._values[targetIndex],
        leftChild = this._values[leftChildIndex],
        rightChild = this._values[rightChildIndex];

      if (target < leftChild && target < rightChild) {
        if (rightChild > leftChild) {
          [this._values[targetIndex], this._values[rightChildIndex]] = [
            this._values[rightChildIndex],
            this._values[targetIndex],
          ];

          targetIndex = rightChildIndex;
        } else {
          [this._values[targetIndex], this._values[leftChildIndex]] = [
            this._values[leftChildIndex],
            this._values[targetIndex],
          ];

          targetIndex = leftChildIndex;
        }

        continue;
      } else if (rightChild >= target) {
        [this._values[targetIndex], this._values[rightChildIndex]] = [
          this._values[rightChildIndex],
          this._values[targetIndex],
        ];

        targetIndex = leftChildIndex;

        continue;
      } else if (leftChild >= target) {
        [this._values[targetIndex], this._values[leftChildIndex]] = [
          this._values[leftChildIndex],
          this._values[targetIndex],
        ];

        targetIndex = leftChildIndex;

        continue;
      }

      break;
    }
  }

  public insert(value: number): number[] {
    this._values.push(value);
    this.sinkingUp(value);
    return this._values;
  }

  public extractMax(): number | null {
    if (!this._values.length) {
      return null;
    }
    const root = this._values[0];
    this._values[0] = this._values[this._values.length - 1];
    this._values.pop();
    this.sinkingDown();

    return root;
  }
}
```

## Priority Queue

A data structure which every element has a priority.
Elements with higher priorities are served before elements with lower priorities.

**In the following example, we implemented a priority queue using minBinaryHeap but you should know binaryHeaps and priority queue is two different concepts and we just use an abstract of it**

```typescript
interface INode {
  value: any;
  priority: number;
}

class _Node implements INode {
  constructor(public value: any, public priority: number = 0) {}
}

class PriorityQueue {
  private _values: INode[] = [];
  get values(): INode[] {
    return this._values;
  }

  private sinkingUp(node: INode): void {
    let valueIndex = this._values.length - 1;
    while (valueIndex > 0) {
      const parentIndex = Math.floor((valueIndex - 1) / 2);
      const parent = this._values[parentIndex];

      if (node.priority >= parent.priority) break;

      this._values[parentIndex] = node;
      this._values[valueIndex] = parent;

      valueIndex = parentIndex;
    }
  }
  private sinkingDown(): void {
    let targetIndex = 0;
    while (true) {
      let leftChildIndex = targetIndex * 2 + 1,
        rightChildIndex = targetIndex * 2 + 2;

      let target = this._values[targetIndex],
        leftChild = this._values[leftChildIndex],
        rightChild = this._values[rightChildIndex];

      if (
        leftChild &&
        rightChild &&
        target.priority > leftChild.priority &&
        target.priority > rightChild.priority
      ) {
        if (rightChild.priority < leftChild.priority) {
          [this._values[targetIndex], this._values[rightChildIndex]] = [
            this._values[rightChildIndex],
            this._values[targetIndex],
          ];

          targetIndex = rightChildIndex;
        } else {
          [this._values[targetIndex], this._values[leftChildIndex]] = [
            this._values[leftChildIndex],
            this._values[targetIndex],
          ];

          targetIndex = leftChildIndex;
        }

        continue;
      } else if (rightChild && rightChild.priority <= target.priority) {
        [this._values[targetIndex], this._values[rightChildIndex]] = [
          this._values[rightChildIndex],
          this._values[targetIndex],
        ];

        targetIndex = leftChildIndex;

        continue;
      } else if (leftChild && leftChild.priority <= target.priority) {
        [this._values[targetIndex], this._values[leftChildIndex]] = [
          this._values[leftChildIndex],
          this._values[targetIndex],
        ];

        targetIndex = leftChildIndex;

        continue;
      }

      break;
    }
  }

  public enqueue({ value, priority }: INode): _Node[] {
    const node = new _Node(value, priority);
    this._values.push(node);
    this.sinkingUp(node);
    return this._values;
  }

  public dequeue(): _Node | null {
    if (!this._values.length) {
      return null;
    }
    const root = this._values[0];
    this._values[0] = this._values[this._values.length - 1];
    this._values.pop();
    this.sinkingDown();

    return root;
  }
}
```

## Hash Tables

Hash tables are collection of key-value pairs

### collisions

There is possibility for handle collisions is hash tables :

- Separate chaining ( e.g. using nested arrays of key values _implemented in following hash tables_ )
- linear probing ( if index filled place {key, value} in next position )

```typescript
type El = [string, any];
class HashTable {
  private keyMap: El[][];
  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  public _hash(key: string): number {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < key.length; i++) {
      const characterCode = key.charCodeAt(i) - 96;
      total = (total + characterCode * WEIRD_PRIME) % this.keyMap.length;
    }
    return total;
  }

  set(key: string, value: any): El[][] {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);

    return this.keyMap;
  }

  get(key: string): El | undefined {
    const index = this._hash(key);

    const elements = this.keyMap[index];

    if (elements) {
      for (let value of elements) {
        if (value[0] === key) return value[1];
      }
    }

    return undefined;
  }

  get keys(): string[] {
    const keys: string[] = [];
    for (let value of this.keyMap) {
      if (value) {
        for (let _value of value) {
          keys.push(_value[0]);
        }
      }
    }
    return keys;
  }

  get values(): any[] {
    const values = new Set<any>();

    for (let value of this.keyMap) {
      if (value) {
        for (let _value of value) {
          values.add(value[1]);
        }
      }
    }

    return [...values];
  }
}
```

## Graphs

A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for directed graph.

### terminology

- vertex :node

- edge : connection between nodes

- directed/ undirected graph:

  in directed graph there is a direction assigned to vertices an in undirected no direction assigned.
  ![](./assets/three-node-networks.jpg)

- weighted/ unweighted graph:

  in weighted graph there is a weight associated by edges but in unweighted graph no weight assigned to edges
  ![](./assets/3.-Weithened-Graph.png)

### adjacency matrix

![](./assets/GahiR.jpg)

## adjacency list

![](./assets/268857bd-bb32-4fa5-88c9-66d7787952e9.png)

## adjacency list vs adjacency matrix

|   Operation   | Adjacency List | Adjacency Matrix |
| :-----------: | :------------: | :--------------: |
|  Add vertex   |      O(1)      |      O(V^2)      |
|   Add Edge    |      O(1)      |       O(1)       |
| Remove vertex |     O(V+E)     |      O(V^2)      |
|  Remove Edge  |      O(E)      |       O(1)       |
|     Query     |     O(V+E)     |       O(1)       |
|    Storage    |     O(V+E)     |      O(V^2)      |

- |V| : number of Vertices
- |E| : number of Edges

<hr/>

- **Adjacency List** take **less space** in sparse graph( when we have a few edges ).
- **Adjacency List** are **faster to iterate** over edges.
- **Adjacency Matrix** are **faster to** finding a specific edge.

### graph(adjacency list)

```typescript
interface AdjacencyList {
  [vertex: string]: string[];
}

class Graph {
  private _adjacencyList: AdjacencyList = {};
  public get adjacencyList(): AdjacencyList {
    return this._adjacencyList;
  }
  public set adjacencyList(value: AdjacencyList) {
    this._adjacencyList = value;
  }

  public addVertex(vertex: string): AdjacencyList {
    this._adjacencyList[vertex] = [];
    return this._adjacencyList;
  }

  public addEdge(vertex1: string, vertex2: string): boolean {
    if (this._adjacencyList[vertex1] && this._adjacencyList[vertex2]) {
      this._adjacencyList[vertex1].push(vertex2),
        this._adjacencyList[vertex2].push(vertex1);

      return true;
    }
    return false;
  }

  public removeEdge(vertex1: string, vertex2: string): boolean {
    if (this._adjacencyList[vertex1] && this._adjacencyList[vertex2]) {
      (this._adjacencyList[vertex1] = this._adjacencyList[vertex1].filter(
        (value: string) => value !== vertex2
      )),
        (this._adjacencyList[vertex2] = this._adjacencyList[vertex2].filter(
          (value: string) => value !== vertex1
        ));
      return true;
    }
    return false;
  }

  public removeVertex(vertex: string): string | undefined {
    if (this._adjacencyList[vertex]) {
      for (let key in this._adjacencyList) {
        this.removeEdge(key, vertex);
      }
      delete this._adjacencyList[vertex];

      return vertex;
    }
    return undefined;
  }
}
```

## Graph Traversal

### depth first traversal and breadth first traversal in graph

```typescript
interface AdjacencyList {
  [vertex: string]: string[];
}

class Graph {
  private _adjacencyList: AdjacencyList = {};
  public get adjacencyList(): AdjacencyList {
    return this._adjacencyList;
  }
  public set adjacencyList(value: AdjacencyList) {
    this._adjacencyList = value;
  }

  public addVertex(vertex: string): AdjacencyList {
    this._adjacencyList[vertex] = [];
    return this._adjacencyList;
  }

  public addEdge(vertex1: string, vertex2: string): boolean {
    if (this._adjacencyList[vertex1] && this._adjacencyList[vertex2]) {
      this._adjacencyList[vertex1].push(vertex2),
        this._adjacencyList[vertex2].push(vertex1);

      return true;
    }
    return false;
  }

  public removeEdge(vertex1: string, vertex2: string): boolean {
    if (this._adjacencyList[vertex1] && this._adjacencyList[vertex2]) {
      (this._adjacencyList[vertex1] = this._adjacencyList[vertex1].filter(
        (value: string) => value !== vertex2
      )),
        (this._adjacencyList[vertex2] = this._adjacencyList[vertex2].filter(
          (value: string) => value !== vertex1
        ));
      return true;
    }
    return false;
  }

  public removeVertex(vertex: string): string | undefined {
    if (this._adjacencyList[vertex]) {
      for (let key in this._adjacencyList) {
        this.removeEdge(key, vertex);
      }
      delete this._adjacencyList[vertex];

      return vertex;
    }
    return undefined;
  }

  public dfcRecursive(startingVertex: string): string[] {
    const results: string[] = [];
    const adjacencyList = this._adjacencyList;

    let currentVertex = this._adjacencyList[startingVertex];
    if (currentVertex) {
      const visitedVertex: { [vertex: string]: boolean } = {};

      (function traverse(vertex: string | undefined): void {
        if (!vertex) return;

        if (!visitedVertex[vertex]) {
          visitedVertex[vertex] = true;
          results.push(vertex);

          for (let neighbor of currentVertex) {
            if (!visitedVertex[neighbor]) {
              currentVertex = adjacencyList[neighbor];
              traverse(neighbor);
            }
          }
        }
      })(startingVertex);
    }

    return results;
  }
  // or
  public dfsIterative(startingVertex: string): string[] {
    const results: string[] = [];

    if (this._adjacencyList[startingVertex]) {
      let stack: string[] = [startingVertex];
      const visitedVertex: { [vertex: string]: boolean } = {};

      while (stack.length) {
        debugger;
        const currentVertex = stack.pop();
        if (currentVertex && !visitedVertex[currentVertex]) {
          visitedVertex[currentVertex] = true;
          results.push(currentVertex);
          stack = [...stack, ...this._adjacencyList[currentVertex]];
        }
      }
    }

    return results;
  }

  public breadthFirstSearch(startingVertex: string): string[] {
    const results: string[] = [];

    if (this._adjacencyList[startingVertex]) {
      let queue = [startingVertex];
      const visitedVertex: { [vertex: string]: boolean } = {};

      while (queue.length) {
        const currentVertex = queue.shift();
        if (currentVertex && !visitedVertex[currentVertex]) {
          visitedVertex[currentVertex] = true;
          results.push(currentVertex);
          queue = [...queue, ...this._adjacencyList[currentVertex]];
        }
      }
    }

    return results;
  }
}
```

## Dijkstra's Shortest path firt Algorithms

Finding shortest path between two vertices in a **weighted graph**.

![](./assets/Dijkstra_Animation.gif)

```typescript
interface Value {
  value: any;
  priority: number;
}

interface Neighbor {
  vertex: string;
  weight: number;
}

interface AdjacencyList {
  [vertex: string]: Neighbor[];
}

// naive priority queue
class PriorityQueue {
  private _values: Value[] = [];
  public get values(): Value[] {
    return this._values;
  }

  public enqueue(value: any, priority: number): Value[] {
    this._values.push({ value, priority });
    this.sort();
    return this._values;
  }

  public dequeue(): Value {
    const value = this._values.shift();
    return value as Value;
  }

  private sort() {
    this._values.sort((a: Value, b: Value) => a.priority - b.priority);
  }
}

class WeightedGraph {
  private _adjacencyList: AdjacencyList = {};
  public get adjacencyList(): AdjacencyList {
    return this._adjacencyList;
  }
  public set adjacencyList(value: AdjacencyList) {
    this._adjacencyList = value;
  }

  public addVertex(vertex: string): AdjacencyList {
    this._adjacencyList[vertex] = [];
    return this._adjacencyList;
  }

  public addEdge(vertex1: string, vertex2: string, weight: number): boolean {
    if (this._adjacencyList[vertex1]) {
      this._adjacencyList[vertex1].push({ vertex: vertex2, weight });
      this._adjacencyList[vertex2].push({ vertex: vertex1, weight });
      return true;
    }
    return false;
  }

  /* 
    dijkstra shortest path first
    */

  dijkstraSPF(startingVertex: string, targetVertex: string): string[] {
    let path: string[] = [];

    if (
      this._adjacencyList[startingVertex] &&
      this._adjacencyList[targetVertex]
    ) {
      const pq = new PriorityQueue();
      const previousVertex: { [vertex: string]: string | null } = {};
      const distances: { [vertex: string]: number } = {};

      // build initial states
      for (let key in this._adjacencyList) {
        if (key === startingVertex) {
          (distances[key] = 0), pq.enqueue(key, 0);
        } else {
          distances[key] = Infinity;
          pq.enqueue(key, Infinity);
        }
        previousVertex[key] = null;
      }

      while (pq.values.length) {
        let smallest = pq.dequeue().value;
        if (smallest) {
          if (smallest === targetVertex) {
            // done build path
            while (previousVertex[smallest] || smallest === startingVertex) {
              path.push(smallest);
              smallest = previousVertex[smallest];
            }
            break;
          }

          for (let neighbor of this._adjacencyList[smallest]) {
            const candidate = distances[smallest] + neighbor.weight;

            let nextNeighbor = neighbor.vertex;

            if (candidate < distances[nextNeighbor]) {
              distances[nextNeighbor] = candidate;

              previousVertex[nextNeighbor] = smallest;

              pq.enqueue(nextNeighbor, candidate);
            }
          }
        }
      }
    }

    return path.reverse();
  }
}
```

## Dynamic Programming (light introduction)

It's a method for solving a complex problems by breaking it down into a collection of simpler problems, solving their subProblems **once** and **storing** their solutions.
_technically it using knowledge of last problems to solve next by memorization_

### example Fibonacci sequence

Let's implement it without dynamic programming:without dynamic programming:

**_in fibonacci sequence fib(n) = fib(n-2) + fib(n-1) && fin(1) = 1 && fib(2) = 1_**

**O(2^n)**

```typescript
function fib(n: number): number {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
```

![](./assets/2-Figure3.1-1.png)

As you see we calculate f(5) two times with current implementation.

### memorization

Storing the results of expensive function class and returning the cached result when the same inputs occur again.

O(n)

```typescript
function fib(n: number, memo: number[] = []): number {
  if (memo[n]) return memo[n];

  if (n <= 2) return 1;

  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
}
fib(10000); // Maximum callStack exceeded
```

### tabulation

```typescript
function fib(n: number): number {
  if (n <= 2) return 1;

  const fibNumbers = [0, 1, 1];

  for (let index = 3; index <= n; index++) {
    fibNumbers[index] = fibNumbers[index - 1] + fibNumbers[index - 2];
  }

  console.log(fibNumbers);

  return fibNumbers[n];
}
fib(10000); // Infinity
```

## Interesting Stuff

```typescript
// turn it to boolean
console.log(!!1); // true
console.log(!!0); // false

// group operation
(newNode.prev = prevNode), (newNode.next = nextNode);
```

## String

```typescript
const str = "hello";
str.search('lo') || .indexOf('lo') // 3
str.includes('lo') // true
```

### string pattern matching

```typescript
// regex.test(str: number) Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
function charCount(str: string) {
  const result: { [key: string]: number } = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

// *** string.chatCodeAt(i: number) Returns the unicode of value on specified location

/* 
numeric (0-9) code > 47 && code < 58;
upper alpha (A-Z) code > 64 && code < 91;
lower alpha (a-z) code > 96 && code <123;
*/
function charCount(str: string) {
  const result: { [key: string]: number } = {};

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

function isAlphaNumeric(char: string) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
```

## Array

```typescript
const array = ["hello", "world"];
arr.find((el) => el === "world"); // world
arr.findIndex((el) => el === "world"); // 1

[1, 2].includes(1); // true

Array.from({ length: 2 }, () => ["lol"]); // [["lol"], ["lol"]]

const stack = ["A", "B", "D", "E", "C", "F"];
const s = stack.shift();
const p = stack.pop();
console.log(s); // "A"
console.log(p); // "F"

["a", "b"].reverse(); // ['b', 'a']
```

### Object

```typescript
delete this._adjacencyList[vertex]; // delete key and value from object
delete this._adjacencyList.vertex;
```

### Map

```typescript
const map = new Map();
// store any type of **unique key** of use duplicate key it will override last value
map.set({ 1: "Object" }, "Object");
map.set(["arr"], "arr");
map.set(1, "number");
map.set(false, "boolean");
map.set(() => console.log("Function"), "Function");

console.log(map);
/* 
0: {Object => "Object"}
1: {Array(1) => "arr"}
2: {1 => "number"}
3: {false => "boolean"}
4: {function () { return console.log("Function"); } => "Function"}
*/

// iterable by **for (let [key, value] of map)**
for (let [key, value] of map) console.log(key, value);

// map to arr
const arr = [...map]; // :[ [key, value] ]
/* 
0: (2) [{…}, "Object"]
1: (2) [Array(1), "arr"]
2: (2) [1, "number"]
3: (2) [false, "boolean"]
4: (2) [ƒ, "Function"]
*/
```

## Math

```typescript
Math.pow(2, 2); // 4
Math.abs(-5); // 5
Math.log10(100); // 10
Math.max(...[1, 2, 3]); // 3
Math.min(...[1, 2, 3]); // 1
```
