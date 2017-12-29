declare module "mxgraphAllClasses" {
	
/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxTooltipHandler
 * 
 * Graph event handler that displays tooltips. <mxGraph.getTooltip> is used to
 * get the tooltip for a cell or handle. This handler is built-into
 * <mxGraph.tooltipHandler> and enabled using <mxGraph.setTooltips>.
 *
 * Example:
 * 
 * (code>
 * new mxTooltipHandler(graph);
 * (end)
 * 
 * Constructor: mxTooltipHandler
 * 
 * Constructs an event handler that displays tooltips with the specified
 * delay (in milliseconds). If no delay is specified then a default delay
 * of 500 ms (0.5 sec) is used.
 * 
 * Parameters:
 * 
 * graph - Reference to the enclosing <mxGraph>.
 * delay - Optional delay in milliseconds.
 */
export class mxTooltipHandler {
	constructor(graph: mxGraph, delay?: number);
// {
// 	if (graph != null)
// 	{
// 		this.graph = graph;
// 		this.delay = delay || 500;
// 		this.graph.addMouseListener(this);
// 	}
// };

/**
 * Variable: zIndex
 * 
 * Specifies the zIndex for the tooltip and its shadow. Default is 10005.
 */
zIndex: number; //10005

/**
 * Variable: graph
 * 
 * Reference to the enclosing <mxGraph>.
 */
graph: mxGraph; //null

/**
 * Variable: delay
 * 
 * Delay to show the tooltip in milliseconds. Default is 500.
 */
delay: number; //null

/**
 * Variable: ignoreTouchEvents
 * 
 * Specifies if touch and pen events should be ignored. Default is true.
 */
ignoreTouchEvents: boolean; //true

/**
 * Variable: hideOnHover
 * 
 * Specifies if the tooltip should be hidden if the mouse is moved over the
 * current cell. Default is false.
 */
hideOnHover: boolean; //false

/**
 * Variable: destroyed
 * 
 * True if this handler was destroyed using <destroy>.
 */
destroyed: boolean; //false

/**
 * Variable: enabled
 * 
 * Specifies if events are handled. Default is true.
 */
enabled: boolean; //true

/**
 * Function: isEnabled
 * 
 * Returns true if events are handled. This implementation
 * returns <enabled>.
 */
isEnabled(): boolean;
// {
// 	return this.enabled;
// };

/**
 * Function: setEnabled
 * 
 * Enables or disables event handling. This implementation
 * updates <enabled>.
 */
setEnabled(enabled: boolean): void;
// {
// 	this.enabled = enabled;
// };

/**
 * Function: isHideOnHover
 * 
 * Returns <hideOnHover>.
 */
isHideOnHover(): boolean;
// {
// 	return this.hideOnHover;
// };

/**
 * Function: setHideOnHover
 * 
 * Sets <hideOnHover>.
 */
setHideOnHover(value: boolean): void;
// {
// 	this.hideOnHover = value;
// };

/**
 * Function: init
 * 
 * Initializes the DOM nodes required for this tooltip handler.
 */
init(): void;
// {
// 	if (document.body != null)
// 	{
// 		this.div = document.createElement('div');
// 		this.div.className = 'mxTooltip';
// 		this.div.style.visibility = 'hidden';

// 		document.body.appendChild(this.div);

// 		mxEvent.addGestureListeners(this.div, mxUtils.bind(this, function(evt)
// 		{
// 			this.hideTooltip();
// 		}));
// 	}
// };

/**
 * Function: mouseDown
 * 
 * Handles the event by initiating a rubberband selection. By consuming the
 * event all subsequent events of the gesture are redirected to this
 * handler.
 */
mouseDown(sender, me): void;
// {
// 	this.reset(me, false);
// 	this.hideTooltip();
// };

/**
 * Function: mouseMove
 * 
 * Handles the event by updating the rubberband selection.
 */
mouseMove(sender, me): void;
// {
// 	if (me.getX() != this.lastX || me.getY() != this.lastY)
// 	{
// 		this.reset(me, true);
		
// 		if (this.isHideOnHover() || me.getState() != this.state || (me.getSource() != this.node &&
// 			(!this.stateSource || (me.getState() != null && this.stateSource ==
// 			(me.isSource(me.getState().shape) || !me.isSource(me.getState().text))))))
// 		{
// 			this.hideTooltip();
// 		}
// 	}
	
// 	this.lastX = me.getX();
// 	this.lastY = me.getY();
// };

/**
 * Function: mouseUp
 * 
 * Handles the event by resetting the tooltip timer or hiding the existing
 * tooltip.
 */
mouseUp(sender, me): void;
// {
// 	this.reset(me, true);
// 	this.hideTooltip();
// };


/**
 * Function: resetTimer
 * 
 * Resets the timer.
 */
resetTimer(): void;
// {
// 	if (this.thread != null)
// 	{
// 		window.clearTimeout(this.thread);
// 		this.thread = null;
// 	}
// };

/**
 * Function: reset
 * 
 * Resets and/or restarts the timer to trigger the display of the tooltip.
 */
reset(me, restart): void;
// {
// 	if (!this.ignoreTouchEvents || mxEvent.isMouseEvent(me.getEvent()))
// 	{
// 		this.resetTimer();
		
// 		if (restart && this.isEnabled() && me.getState() != null && (this.div == null ||
// 			this.div.style.visibility == 'hidden'))
// 		{
// 			var state = me.getState();
// 			var node = me.getSource();
// 			var x = me.getX();
// 			var y = me.getY();
// 			var stateSource = me.isSource(state.shape) || me.isSource(state.text);
	
// 			this.thread = window.setTimeout(mxUtils.bind(this, function()
// 			{
// 				if (!this.graph.isEditing() && !this.graph.popupMenuHandler.isMenuShowing() && !this.graph.isMouseDown)
// 				{
// 					// Uses information from inside event cause using the event at
// 					// this (delayed) point in time is not possible in IE as it no
// 					// longer contains the required information (member not found)
// 					var tip = this.graph.getTooltip(state, node, x, y);
// 					this.show(tip, x, y);
// 					this.state = state;
// 					this.node = node;
// 					this.stateSource = stateSource;
// 				}
// 			}), this.delay);
// 		}
// 	}
// };

/**
 * Function: hide
 * 
 * Hides the tooltip and resets the timer.
 */
hide(): void;
// {
// 	this.resetTimer();
// 	this.hideTooltip();
// };

/**
 * Function: hideTooltip
 * 
 * Hides the tooltip.
 */
hideTooltip(): void;
// {
// 	if (this.div != null)
// 	{
// 		this.div.style.visibility = 'hidden';
// 	}
// };

/**
 * Function: show
 * 
 * Shows the tooltip for the specified cell and optional index at the
 * specified location (with a vertical offset of 10 pixels).
 */
show(tip, x, y): void;
// {
// 	if (!this.destroyed && tip != null && tip.length > 0)
// 	{
// 		// Initializes the DOM nodes if required
// 		if (this.div == null)
// 		{
// 			this.init();
// 		}
		
// 		var origin = mxUtils.getScrollOrigin();

// 		this.div.style.zIndex = this.zIndex;
// 		this.div.style.left = (x + origin.x) + 'px';
// 		this.div.style.top = (y + mxConstants.TOOLTIP_VERTICAL_OFFSET +
// 			origin.y) + 'px';

// 		if (!mxUtils.isNode(tip))
// 		{	
// 			this.div.innerHTML = tip.replace(/\n/g, '<br>');
// 		}
// 		else
// 		{
// 			this.div.innerHTML = '';
// 			this.div.appendChild(tip);
// 		}
		
// 		this.div.style.visibility = '';
// 		mxUtils.fit(this.div);
// 	}
// };

/**
 * Function: destroy
 * 
 * Destroys the handler and all its resources and DOM nodes.
 */
destroy(): void;
// {
// 	if (!this.destroyed)
// 	{
// 		this.graph.removeMouseListener(this);
// 		mxEvent.release(this.div);
		
// 		if (this.div != null && this.div.parentNode != null)
// 		{
// 			this.div.parentNode.removeChild(this.div);
// 		}
		
// 		this.destroyed = true;
// 		this.div = null;
// 	}
// };
}
}