declare module "mxgraphAllClasses" {

	export type mxAbstractCanvas2D_state = {
		dx: number,
		dy: number,
		scale: number,
		alpha: number,
		fillAlpha: number,
		strokeAlpha: number,
		fillColor,
		gradientFillAlpha: number,
		gradientColor,
		gradientAlpha: number,
		gradientDirection,
		strokeColor,
		strokeWidth: number,
		dashed: boolean,
		dashPattern: string,
		lineCap: string,
		lineJoin: string,
		miterLimit: number,
		fontColor: string,
		fontBackgroundColor,
		fontBorderColor,
		fontSize: string, //mxConstants.DEFAULT_FONTSIZE,
		fontFamily: string, //mxConstants.DEFAULT_FONTFAMILY,
		fontStyle: number,
		shadow: false,
		shadowColor: string,
		shadowAlpha: number //mxConstants.SHADOW_OPACITY,
		shadowDx: number //mxConstants.SHADOW_OFFSET_X,
		shadowDy: number //mxConstants.SHADOW_OFFSET_Y,
		rotation: number,
		rotationCx: number,
		rotationCy: number
	};

	/**
	 * Copyright (c) 2006-2015, JGraph Ltd
	 * Copyright (c) 2006-2015, Gaudenz Alder
	 */
	/**
	 * Class: mxAbstractCanvas2D
	 *
	 * Base class for all canvases. A description of the public API is available in <mxXmlCanvas2D>.
	 * All color values of <mxConstants.NONE> will be converted to null in the state.
	 * 
	 * Constructor: mxAbstractCanvas2D
	 *
	 * Constructs a new abstract canvas.
	 */
	export class mxAbstractCanvas2D {
		constructor();
		// {
		// 	/**
		// 	 * Variable: converter
		// 	 * 
		// 	 * Holds the <mxUrlConverter> to convert image URLs.
		// 	 */
		// 	this.converter = this.createUrlConverter();

		// 	this.reset();
		// };

		/**
		 * Variable: state
		 * 
		 * Holds the current state.
		 */
		state: mxAbstractCanvas2D_state; //null

		/**
		 * Variable: states
		 * 
		 * Stack of states.
		 */
		states: mxAbstractCanvas2D_state[]; //null

		/**
		 * Variable: path
		 * 
		 * Holds the current path as an array.
		 */
		path: number[]; //null

		/**
		 * Variable: rotateHtml
		 * 
		 * Switch for rotation of HTML. Default is false.
		 */
		rotateHtml: boolean; //true

		/**
		 * Variable: lastX
		 * 
		 * Holds the last x coordinate.
		 */
		lastX: number; //0

		/**
		 * Variable: lastY
		 * 
		 * Holds the last y coordinate.
		 */
		lastY: number; //0

		/**
		 * Variable: moveOp
		 * 
		 * Contains the string used for moving in paths. Default is 'M'.
		 */
		moveOp: string; //'M'

		/**
		 * Variable: lineOp
		 * 
		 * Contains the string used for moving in paths. Default is 'L'.
		 */
		lineOp: string; //'L'

		/**
		 * Variable: quadOp
		 * 
		 * Contains the string used for quadratic paths. Default is 'Q'.
		 */
		quadOp: string; //'Q'

		/**
		 * Variable: curveOp
		 * 
		 * Contains the string used for bezier curves. Default is 'C'.
		 */
		curveOp: string; //'C'

		/**
		 * Variable: closeOp
		 * 
		 * Holds the operator for closing curves. Default is 'Z'.
		 */
		closeOp: string; //'Z'

		/**
		 * Variable: pointerEvents
		 * 
		 * Boolean value that specifies if events should be handled. Default is false.
		 */
		pointerEvents: boolean; //false

		/**
		 * Function: createUrlConverter
		 * 
		 * Create a new <mxUrlConverter> and returns it.
		 */
		createUrlConverter(): mxUrlConverter;
		// {
		// 	return new mxUrlConverter();
		// };

		/**
		 * Function: reset
		 * 
		 * Resets the state of this canvas.
		 */
		reset(): void;
		// {
		// 	this.state = this.createState();
		// 	this.states = [];
		// };

		/**
		 * Function: createState
		 * 
		 * Creates the state of the this canvas.
		 */
		createState(): mxAbstractCanvas2D_state;
		// {
		// 	return {
		// 		dx: 0,
		// 		dy: 0,
		// 		scale: 1,
		// 		alpha: 1,
		// 		fillAlpha: 1,
		// 		strokeAlpha: 1,
		// 		fillColor: null,
		// 		gradientFillAlpha: 1,
		// 		gradientColor: null,
		// 		gradientAlpha: 1,
		// 		gradientDirection: null,
		// 		strokeColor: null,
		// 		strokeWidth: 1,
		// 		dashed: false,
		// 		dashPattern: '3 3',
		// 		lineCap: 'flat',
		// 		lineJoin: 'miter',
		// 		miterLimit: 10,
		// 		fontColor: '#000000',
		// 		fontBackgroundColor: null,
		// 		fontBorderColor: null,
		// 		fontSize: mxConstants.DEFAULT_FONTSIZE,
		// 		fontFamily: mxConstants.DEFAULT_FONTFAMILY,
		// 		fontStyle: 0,
		// 		shadow: false,
		// 		shadowColor: mxConstants.SHADOWCOLOR,
		// 		shadowAlpha: mxConstants.SHADOW_OPACITY,
		// 		shadowDx: mxConstants.SHADOW_OFFSET_X,
		// 		shadowDy: mxConstants.SHADOW_OFFSET_Y,
		// 		rotation: 0,
		// 		rotationCx: 0,
		// 		rotationCy: 0
		// 	};
		// };

		/**
		 * Function: format
		 * 
		 * Rounds all numbers to integers.
		 */
		format(value: string): number;
		// {
		// 	return Math.round(parseFloat(value));
		// };

		/**
		 * Function: addOp
		 * 
		 * Adds the given operation to the path.
		 */
		addOp(): void;
		// {
		// 	if (this.path != null)
		// 	{
		// 		this.path.push(arguments[0]);

		// 		if (arguments.length > 2)
		// 		{
		// 			var s = this.state;

		// 			for (var i = 2; i < arguments.length; i += 2)
		// 			{
		// 				this.lastX = arguments[i - 1];
		// 				this.lastY = arguments[i];

		// 				this.path.push(this.format((this.lastX + s.dx) * s.scale));
		// 				this.path.push(this.format((this.lastY + s.dy) * s.scale));
		// 			}
		// 		}
		// 	}
		// };

		/**
		 * Function: rotatePoint
		 * 
		 * Rotates the given point and returns the result as an <mxPoint>.
		 */
		rotatePoint(x: number, y: number, theta: number, cx: number, cy: number): mxPoint;
		// {
		// 	var rad = theta * (Math.PI / 180);

		// 	return mxUtils.getRotatedPoint(new mxPoint(x, y), Math.cos(rad),
		// 		Math.sin(rad), new mxPoint(cx, cy));
		// };

		/**
		 * Function: save
		 * 
		 * Saves the current state.
		 */
		save(): void;
		// {
		// 	this.states.push(this.state);
		// 	this.state = mxUtils.clone(this.state);
		// };

		/**
		 * Function: restore
		 * 
		 * Restores the current state.
		 */
		restore(): void;
		// {
		// 	if (this.states.length > 0)
		// 	{
		// 		this.state = this.states.pop();
		// 	}
		// };

		/**
		 * Function: setLink
		 * 
		 * Sets the current link. Hook for subclassers.
		 */
		setLink(link): void;
		// {
		// 	// nop
		// };

		/**
		 * Function: scale
		 * 
		 * Scales the current state.
		 */
		scale(value: number): void;
		// {
		// 	this.state.scale *= value;
		// 	this.state.strokeWidth *= value;
		// };

		/**
		 * Function: translate
		 * 
		 * Translates the current state.
		 */
		translate(dx: number, dy: number): void;
		// {
		// 	this.state.dx += dx;
		// 	this.state.dy += dy;
		// };

		/**
		 * Function: rotate
		 * 
		 * Rotates the current state.
		 */
		rotate(theta: number, flipH, flipV, cx: number, cy: number): void;
		// {
		// 	// nop
		// };

		/**
		 * Function: setAlpha
		 * 
		 * Sets the current alpha.
		 */
		setAlpha(value: number): void;
		// {
		// 	this.state.alpha = value;
		// };

		/**
		 * Function: setFillAlpha
		 * 
		 * Sets the current solid fill alpha.
		 */
		setFillAlpha(value: number): void;
		// {
		// 	this.state.fillAlpha = value;
		// };

		/**
		 * Function: setStrokeAlpha
		 * 
		 * Sets the current stroke alpha.
		 */
		setStrokeAlpha(value: number): void;
		// {
		// 	this.state.strokeAlpha = value;
		// };

		/**
		 * Function: setFillColor
		 * 
		 * Sets the current fill color.
		 */
		setFillColor(value: string): void;
		// {
		// 	if (value == mxConstants.NONE)
		// 	{
		// 		value = null;
		// 	}

		// 	this.state.fillColor = value;
		// 	this.state.gradientColor = null;
		// };

		/**
		 * Function: setGradient
		 * 
		 * Sets the current gradient.
		 */
		setGradient(color1: string, color2: string, x: number, y: number, w: number, h: number, direction: mxConstants_direction, alpha1: number, alpha2: number): void;
		// {
		// 	var s = this.state;
		// 	s.fillColor = color1;
		// 	s.gradientFillAlpha = (alpha1 != null) ? alpha1 : 1;
		// 	s.gradientColor = color2;
		// 	s.gradientAlpha = (alpha2 != null) ? alpha2 : 1;
		// 	s.gradientDirection = direction;
		// };

		/**
		 * Function: setStrokeColor
		 * 
		 * Sets the current stroke color.
		 */
		setStrokeColor(value: string): void;
		// {
		// 	if (value == mxConstants.NONE)
		// 	{
		// 		value = null;
		// 	}

		// 	this.state.strokeColor = value;
		// };

		/**
		 * Function: setStrokeWidth
		 * 
		 * Sets the current stroke width.
		 */
		setStrokeWidth(value: number): void;
		// {
		// 	this.state.strokeWidth = value;
		// };

		/**
		 * Function: setDashed
		 * 
		 * Enables or disables dashed lines.
		 */
		setDashed(value: boolean): void;
		// {
		// 	this.state.dashed = value;
		// };

		/**
		 * Function: setDashPattern
		 * 
		 * Sets the current dash pattern.
		 */
		setDashPattern(value: string): void;
		// {
		// 	this.state.dashPattern = value;
		// };

		/**
		 * Function: setLineCap
		 * 
		 * Sets the current line cap.
		 */
		setLineCap(value: string): void;
		// {
		// 	this.state.lineCap = value;
		// };

		/**
		 * Function: setLineJoin
		 * 
		 * Sets the current line join.
		 */
		setLineJoin(value: string): void;
		// {
		// 	this.state.lineJoin = value;
		// };

		/**
		 * Function: setMiterLimit
		 * 
		 * Sets the current miter limit.
		 */
		setMiterLimit(value: number): void;
		// {
		// 	this.state.miterLimit = value;
		// };

		/**
		 * Function: setFontColor
		 * 
		 * Sets the current font color.
		 */
		setFontColor(value: string): void;
		// {
		// 	if (value == mxConstants.NONE)
		// 	{
		// 		value = null;
		// 	}

		// 	this.state.fontColor = value;
		// };

		/**
		 * Function: setFontColor
		 * 
		 * Sets the current font color.
		 */
		setFontBackgroundColor(value: string): void;
		// {
		// 	if (value == mxConstants.NONE)
		// 	{
		// 		value = null;
		// 	}

		// 	this.state.fontBackgroundColor = value;
		// };

		/**
		 * Function: setFontColor
		 * 
		 * Sets the current font color.
		 */
		setFontBorderColor(value: string): void;
		// {
		// 	if (value == mxConstants.NONE)
		// 	{
		// 		value = null;
		// 	}

		// 	this.state.fontBorderColor = value;
		// };

		/**
		 * Function: setFontSize
		 * 
		 * Sets the current font size.
		 */
		setFontSize(value: number): void;
		// {
		// 	this.state.fontSize = parseFloat(value);
		// };

		/**
		 * Function: setFontFamily
		 * 
		 * Sets the current font family.
		 */
		setFontFamily(value: string): void;
		// {
		// 	this.state.fontFamily = value;
		// };

		/**
		 * Function: setFontStyle
		 * 
		 * Sets the current font style.
		 */
		setFontStyle(value: number): void;
		// {
		// 	if (value == null)
		// 	{
		// 		value = 0;
		// 	}

		// 	this.state.fontStyle = value;
		// };

		/**
		 * Function: setShadow
		 * 
		 * Enables or disables and configures the current shadow.
		 */
		setShadow(enabled: boolean): void;
		// {
		// 	this.state.shadow = enabled;
		// };

		/**
		 * Function: setShadowColor
		 * 
		 * Enables or disables and configures the current shadow.
		 */
		setShadowColor(value: string): void;
		// {
		// 	if (value == mxConstants.NONE)
		// 	{
		// 		value = null;
		// 	}

		// 	this.state.shadowColor = value;
		// };

		/**
		 * Function: setShadowAlpha
		 * 
		 * Enables or disables and configures the current shadow.
		 */
		setShadowAlpha(value: number): void;
		// {
		// 	this.state.shadowAlpha = value;
		// };

		/**
		 * Function: setShadowOffset
		 * 
		 * Enables or disables and configures the current shadow.
		 */
		setShadowOffset(dx: number, dy: number): void;
		// {
		// 	this.state.shadowDx = dx;
		// 	this.state.shadowDy = dy;
		// };

		/**
		 * Function: begin
		 * 
		 * Starts a new path.
		 */
		begin(): void;
		// {
		// 	this.lastX = 0;
		// 	this.lastY = 0;
		// 	this.path = [];
		// };

		/**
		 * Function: moveTo
		 * 
		 *  Moves the current path the given coordinates.
		 */
		moveTo(x: number, y: number): void;
		// {
		// 	this.addOp(this.moveOp, x, y);
		// };

		/**
		 * Function: lineTo
		 * 
		 * Draws a line to the given coordinates. Uses moveTo with the op argument.
		 */
		lineTo(x: number, y: number): void;
		// {
		// 	this.addOp(this.lineOp, x, y);
		// };

		/**
		 * Function: quadTo
		 * 
		 * Adds a quadratic curve to the current path.
		 */
		quadTo(x1: number, y1: number, x2: number, y2: number): void;
		// {
		// 	this.addOp(this.quadOp, x1, y1, x2, y2);
		// };

		/**
		 * Function: curveTo
		 * 
		 * Adds a bezier curve to the current path.
		 */
		curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
		// {
		// 	this.addOp(this.curveOp, x1, y1, x2, y2, x3, y3);
		// };

		/**
		 * Function: arcTo
		 * 
		 * Adds the given arc to the current path. This is a synthetic operation that
		 * is broken down into curves.
		 */
		arcTo(rx: number, ry: number, angle: number, largeArcFlag, sweepFlag, x: number, y: number): void;
		// {
		// 	var curves = mxUtils.arcToCurves(this.lastX, this.lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y);

		// 	if (curves != null)
		// 	{
		// 		for (var i = 0; i < curves.length; i += 6) 
		// 		{
		// 			this.curveTo(curves[i], curves[i + 1], curves[i + 2],
		// 				curves[i + 3], curves[i + 4], curves[i + 5]);
		// 		}
		// 	}
		// };

		/**
		 * Function: close
		 * 
		 * Closes the current path.
		 */
		close(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
		// {
		// 	this.addOp(this.closeOp);
		// };

		/**
		 * Function: end
		 * 
		 * Empty implementation for backwards compatibility. This will be removed.
		 */
		end(): void; //{ };
	}
}