// -------------- Inheritance ------------------

abstract class IRectangle {
	width: number = 0;
	height: number = 0;
	area(): number {
		return this.width * this.height;
	}
}

class IRectangleWindow extends IRectangle {
	open(): boolean {
		return true;
	}
	toggleOpen(): void {}
} 

class Wall extends IRectangle {
	color: string = 'green';
} 

// but... what if we need class CircleWindow? CircleWindow cannot extends Rectangle!
// so we need to define new parent class...
abstract class ICircle {
	radius: number = 0;
	area(): number {
		return Math.PI * this.radius ** 2;
	}
}

class ICircleWindow extends ICircle {
	// ...and duplicate methods RectangleWindow:
	open(): boolean {
		return true;
	}
	toggleOpen(): void {}
}


// -------------- Composition ------------------

class CWindow {
	constructor (private dimensions: Shape) {}
	open(): boolean {
		return true;
	}
	toggleOpen(): void {}
	area(): number {
		return this.dimensions.area();
	}
}

class CWall {
	constructor (private dimensions: Shape) {}
	color: string = 'white';
	area(): number {
		return this.dimensions.area();
	}
}

interface Shape {
	area(): number;
}

// specific fields and methods
class CRectangle implements Shape {
	width: number = 10;
	height: number = 10;
	area(): number {
		return this.width * this.height;
	} 	
}

class CCircle implements Shape {
	radius: number = 10;
	area(): number {
		return Math.PI * this.radius ** 2;
	} 	
}

const rectangleWindow = new CWindow(new CRectangle);
const circleWindow = new CWindow(new CCircle);