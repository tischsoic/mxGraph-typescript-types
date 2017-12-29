declare module "mxgraphAllClasses" {

/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxTriangle
 * 
 * Implementation of the triangle shape.
 * 
 * Constructor: mxTriangle
 *
 * Constructs a new triangle shape.
 */
export class mxTriangle extends mxActor {

	constructor();
	// {
	// 	mxActor.call(this);
	// };

	/**
	 * Extends mxActor.
	 */
	// mxUtils.extend(mxTriangle, mxActor);

	/**
	 * Function: redrawPath
	 *
	 * Draws the path for this shape.
	 */
	redrawPath(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number): void;
	// {
	// 	var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
	// 	this.addPoints(c, [new mxPoint(0, 0), new mxPoint(w, 0.5 * h), new mxPoint(0, h)], this.isRounded, arcSize, true);
	// };
}
}