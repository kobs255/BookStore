import { BehaviorSubject, Observable } from "rxjs";
import { Item } from "../models/Item";

export class ItemService {
    private cartCount: BehaviorSubject<number> = new BehaviorSubject(0);
    private cartCountValue: number = this.cartCount.value;
    cartedItems: CartItem[] = [];

    private items: Item[] = [
        new Item(1, "Java", "Java is the preferred language for many of today's leading-edge technologies--everything from smartphones and game consoles to robots, massive enterprise systems, and supercomputers. If you're new to Java, the fourth edition of this bestselling guide provides an example-driven introduction to the latest language features and APIs in Java 6 and 7. Advanced Java developers will be able to take a deep dive into areas such as concurrency and JVM enhancements. You'll learn powerful new ways to manage resources and exceptions in your applications, and quickly get up to speed on Java's new concurrency utilities, and APIs for web services and XML. You'll also find an updated tutorial on how to get started with the Eclipse IDE, and a brand-new introduction to database access in Java.", 24.99, 15, "https://img.thriftbooks.com/api/images/m/16ed0316bae65b3c287d7ae4c5d1bfeeaca5b715.jpg"),
        new Item(2, "Intro to c#", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non neque libero. Phasellus ut augue quis sem blandit imperdiet non in lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ullamcorper faucibus tempus. Proin non risus non ex interdum sagittis vel in lacus. In hac habitasse platea dictumst. Nulla vestibulum lobortis ligula, eu egestas velit imperdiet vitae. Quisque volutpat eget lectus in aliquet. Suspendisse imperdiet a ligula maximus faucibus. Cras in ex ipsum. Mauris in libero mauris. In mattis augue quis faucibus iaculis. Duis commodo leo ipsum, imperdiet lacinia lectus vestibulum eu. Donec vestibulum turpis a quam porta, nec pellentesque sapien dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", 49.99, 15, 'https://m.media-amazon.com/images/I/5110qJqtLiL._AC_SY780_.jpg'),
        new Item(3, "Python Mastery", "Vivamus sed leo convallis lorem mattis pretium. In fermentum magna quis velit pretium, sit amet volutpat turpis commodo. In nec interdum tortor. Nullam tristique euismod vestibulum. Morbi malesuada pharetra gravida. Sed suscipit ligula urna, nec porta quam feugiat ac. Donec tincidunt porta dolor, at tincidunt tortor vestibulum eget. Sed in magna purus. Proin ac porttitor lectus. Fusce pretium neque id suscipit rutrum. Praesent porta id odio vitae mattis. Aenean sit amet accumsan ipsum, eget placerat nisl. Sed lobortis dui id erat imperdiet tincidunt. Morbi feugiat felis quam, vel pellentesque ligula imperdiet et. Quisque vel mi non diam euismod condimentum.", 12.99, 15),
        new Item(4, "Intro to Django", "Maecenas bibendum sit amet tortor quis gravida. Sed semper dictum mauris, vitae convallis tellus lobortis non. Vestibulum posuere nec ex vitae pretium. Aliquam feugiat lectus a quam sagittis, eu semper neque eleifend. Pellentesque nunc sapien, sollicitudin eleifend vestibulum id, mollis nec purus. Nulla posuere risus ac accumsan auctor. Maecenas metus orci, accumsan sed dignissim non, fermentum blandit urna. Mauris vel aliquam lorem, et pretium tortor. Nam semper metus eget mi porttitor aliquet. Duis condimentum imperdiet orci id tempus. Praesent elementum quam vitae ipsum porta.", 4.99, 15),
        new Item(5, "Advanced c++", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec semper metus, non varius mi. Suspendisse potenti. Nunc sed odio dapibus, ultrices velit ac, facilisis diam. Nunc convallis, nisl eget finibus ultricies, justo leo cursus orci, ac interdum libero mauris eu mauris. Donec pulvinar mattis lectus. Aliquam ultrices laoreet nibh, quis scelerisque odio iaculis sit amet. Sed fermentum mauris at tortor tincidunt ultricies. Nulla facilisi. Morbi imperdiet scelerisque tempus.", 49.99, 15),
        new Item(6, "Angular", "Praesent tempus orci felis. Pellentesque id dignissim massa. Praesent mattis, velit quis volutpat tincidunt, augue massa venenatis sem, vel condimentum augue nisl at neque. Aliquam hendrerit nec lacus vitae dictum. Pellentesque laoreet finibus enim. Nunc ut massa quis diam accumsan viverra feugiat vitae dolor. Cras lectus leo, lacinia posuere metus ac, viverra faucibus sem. Integer ac tempus dolor. Morbi id egestas mauris. Aenean laoreet rutrum tempor. Phasellus malesuada rhoncus ipsum nec rutrum. Maecenas malesuada orci fringilla eros pulvinar auctor. Pellentesque suscipit lacinia nulla, non pellentesque nulla mollis nec.", 27.99, 15),
        new Item(7, "React", "Nunc euismod arcu vitae rutrum fermentum. Integer efficitur pharetra ipsum. Aliquam vitae commodo purus. Nam id nibh pretium enim malesuada euismod. Vestibulum at consectetur massa, et mollis turpis. Phasellus facilisis neque eget bibendum finibus. Vivamus lacinia commodo lacus, eu aliquam urna sodales ac. Ut non metus ac mi hendrerit molestie eu ac erat. Aenean vel dui vitae justo efficitur semper. Vivamus vestibulum pretium lobortis. Praesent at ligula vitae lorem porttitor ullamcorper.", 11.99, 15),
        new Item(8, ".NET Fundamentals", "Aenean et quam vel est rhoncus ullamcorper vitae sed neque. Integer in vehicula risus, vel malesuada mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce at sagittis nulla, in tempor turpis. Ut vitae luctus ante. Vivamus congue feugiat justo at venenatis. Vestibulum vitae ultrices lorem, eu pharetra metus. Vestibulum ut nunc convallis, tristique velit et, molestie nibh. Praesent dictum diam lacus, dignissim suscipit sapien pretium eget.", 99.99, 15),
        new Item(9, "Advanced SQL", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu odio cursus, congue mauris eu, feugiat mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a lacinia sem. Nam interdum iaculis quam, sed bibendum enim placerat id. Praesent velit leo, vehicula vel imperdiet nec, feugiat vel nisl. Nam ullamcorper laoreet ligula. Fusce eget egestas mi, at laoreet odio. Phasellus ac orci in velit porttitor hendrerit non id ligula.", 3.99, 15)
    ]

    get cartCount$(): Observable<number> {
        return this.cartCount.asObservable();
    }

    incrementCartCount() {
        this.cartCount.next(++this.cartCountValue);
    }

    decrementCartCount() {
        this.cartCount.next(--this.cartCountValue);
    }

    addItem(item: Item) {
        for (let itemGroup of this.cartedItems) {
            if (itemGroup.item.id === item.id) {
                itemGroup.qty++;
                console.log(this.cartedItems, this.cartCount$);
                this.incrementCartCount();
                return;
            }
        }
        this.cartedItems.push({ qty: 1, item })
        this.incrementCartCount();
        console.log(this.cartedItems, this.cartCount$);
    }

    setCartItems(items: CartItem[]) {
        this.cartedItems = items;
    }

    public getItems(): Item[] {
        return this.items;
    }
}
//Decouples qty from item object
export interface CartItem {
    qty: number;
    item: Item
}