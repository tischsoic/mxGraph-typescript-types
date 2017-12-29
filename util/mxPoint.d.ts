declare module "mxgraphAllClasses" {
	interface mxPointContructor {
		new (x?: number, y?: number): mxPoint;
	}

	/**
	 * Copyright (c) 2006-2015, JGraph Ltd
	 * Copyright (c) 2006-2015, Gaudenz Alder
	 */
	/**
	 * Class: mxPoint
	 *
	 * Implements a 2-dimensional vector with double precision coordinates.
	 * 
	 * Constructor: mxPoint
	 *
	 * Constructs a new point for the optional x and y coordinates. If no
	 * coordinates are given, then the default values for <x> and <y> are used.
	 */
	export class mxPoint {
		constructor(x?: number, y?: number);
		// function mxPoint(x, y)
		// {
		// 	this.x = (x != null) ? x : 0;
		// 	this.y = (y != null) ? y : 0;
		// };

		/**
		 * Variable: x
		 *
		 * Holds the x-coordinate of the point. Default is 0.
		 */
		x: number;

		/**
		 * Variable: y
		 *
		 * Holds the y-coordinate of the point. Default is 0.
		 */
		y: number;

		/**
		 * Function: equals
		 * 
		 * Returns true if the given object equals this point.
		 */
		equals(obj: object)
		// {
		// 	return obj != null && obj.x == this.x && obj.y == this.y;
		// };

		/**
		 * Function: clone
		 *
		 * Returns a clone of this <mxPoint>.
		 */
		clone(): mxPoint
		// {
		// 	// Handles subclasses as well
		// 	return mxUtils.clone(this);
		// };
	}
}