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
	toggleOpen(): void {}
} 

class Wall extends Rectangle {
	color: string = 'green';
} 

// but... class CircleWindow cannot extends Rectangle!
// so we need to define new parent class
abstract class Circle {
	radius: number = 0;
	area(): number {
		return Math.PI * this.radius ** 2;
	}
}

class CircleWindow {
	// duplicate RectangleWindow:
	open(): boolean {
		return true;
	}
	toggleOpen(): void {}
}