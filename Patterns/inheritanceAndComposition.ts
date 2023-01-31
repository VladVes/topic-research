// -------------- Inheritance ------------------

abstract class Rectangle {
	width: number = 0;
	height: number = 0;
	area(): number {
		return this.width * this.height;
	}
}

class RectangleWindow extends Rectangle {
	open(): boolean {
		return true;
	}
} 

class Wall extends Rectangle {
	color: string = 'green';
} 