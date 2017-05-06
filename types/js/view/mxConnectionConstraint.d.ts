/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxConnectionConstraint
 * 
 * Defines an object that contains the constraints about how to connect one
 * side of an edge to its terminal.
 * 
 * Constructor: mxConnectionConstraint
 * 
 * Constructs a new connection constraint for the given point and boolean
 * arguments.
 * 
 * Parameters:
 * 
 * point - Optional <mxPoint> that specifies the fixed location of the point
 * in relative coordinates. Default is null.
 * perimeter - Optional boolean that specifies if the fixed point should be
 * projected onto the perimeter of the terminal. Default is true.
 */
declare class mxConnectionConstraint {
	constructor(point?: mxPoint, perimeter?: boolean, name?: boolean);
	// {
	// 	this.point = point;
	// 	this.perimeter = (perimeter != null) ? perimeter : true;
	// 	this.name = name;
	// };

	/**
	 * Variable: point
	 * 
	 * <mxPoint> that specifies the fixed location of the connection point.
	 */
	point: mxPoint | null; //null

	/**
	 * Variable: perimeter
	 * 
	 * Boolean that specifies if the point should be projected onto the perimeter
	 * of the terminal.
	 */
	perimeter: boolean | null; //null

	/**
	 * Variable: name
	 * 
	 * Optional string that specifies the name of the constraint.
	 */
	name: boolean | null; //null
}