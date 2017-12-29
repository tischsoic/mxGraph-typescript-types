declare module "mxgraphAllClasses" {

	/**
	 * Copyright (c) 2006-2015, JGraph Ltd
	 * Copyright (c) 2006-2015, Gaudenz Alder
	 */
	/**
	 * Class: mxMouseEvent
	 * 
	 * Base class for all mouse events in mxGraph. A listener for this event should
	 * implement the following methods:
	 * 
	 * (code)
	 * graph.addMouseListener(
	 * {
	 *   mouseDown: function(sender, evt)
	 *   {
	 *     mxLog.debug('mouseDown');
	 *   },
	 *   mouseMove: function(sender, evt)
	 *   {
	 *     mxLog.debug('mouseMove');
	 *   },
	 *   mouseUp: function(sender, evt)
	 *   {
	 *     mxLog.debug('mouseUp');
	 *   }
	 * });
	 * (end)
	 * 
	 * Constructor: mxMouseEvent
	 *
	 * Constructs a new event object for the given arguments.
	 * 
	 * Parameters:
	 * 
	 * evt - Native mouse event.
	 * state - Optional <mxCellState> under the mouse.
	 * 
	 */
	export class mxMouseEvent {
		constructor(evt: MouseEvent, state: mxCellState);
		// {
		// 	this.evt = evt;
		// 	this.state = state;
		// 	this.sourceState = state;
		// };

		/**
		 * Variable: consumed
		 *
		 * Holds the consumed state of this event.
		 */
		consumed: boolean; //false

		/**
		 * Variable: evt
		 *
		 * Holds the inner event object.
		 */
		evt: MouseEvent; //null

		/**
		 * Variable: graphX
		 *
		 * Holds the x-coordinate of the event in the graph. This value is set in
		 * <mxGraph.fireMouseEvent>.
		 */
		graphX; //null

		/**
		 * Variable: graphY
		 *
		 * Holds the y-coordinate of the event in the graph. This value is set in
		 * <mxGraph.fireMouseEvent>.
		 */
		graphY; //null

		/**
		 * Variable: state
		 *
		 * Holds the optional <mxCellState> associated with this event.
		 */
		state: mxCellState; //null

		/**
		 * Variable: sourceState
		 * 
		 * Holds the <mxCellState> that was passed to the constructor. This can be
		 * different from <state> depending on the result of <mxGraph.getEventState>.
		 */
		sourceState: mxCellState; //null

		/**
		 * Function: getEvent
		 * 
		 * Returns <evt>.
		 */
		getEvent(): MouseEvent;
		// {
		// 	return this.evt;
		// };

		/**
		 * Function: getSource
		 * 
		 * Returns the target DOM element using <mxEvent.getSource> for <evt>.
		 */
		getSource(): Node;
		// {
		// 	return mxEvent.getSource(this.evt);
		// };

		/**
		 * Function: isSource
		 * 
		 * Returns true if the given <mxShape> is the source of <evt>.
		 */
		isSource(shape: mxShape): boolean;
		// {
		// 	if (shape != null)
		// 	{
		// 		return mxUtils.isAncestorNode(shape.node, this.getSource());
		// 	}

		// 	return false;
		// };

		/**
		 * Function: getX
		 * 
		 * Returns <evt.clientX>.
		 */
		getX();
		// {
		// 	return mxEvent.getClientX(this.getEvent());
		// };

		/**
		 * Function: getY
		 * 
		 * Returns <evt.clientY>.
		 */
		getY();
		// {
		// 	return mxEvent.getClientY(this.getEvent());
		// };

		/**
		 * Function: getGraphX
		 * 
		 * Returns <graphX>.
		 */
		getGraphX(): number;
		// {
		// 	return this.graphX;
		// };

		/**
		 * Function: getGraphY
		 * 
		 * Returns <graphY>.
		 */
		getGraphY(): number;
		// {
		// 	return this.graphY;
		// };

		/**
		 * Function: getState
		 * 
		 * Returns <state>.
		 */
		getState(): mxCellState;
		// {
		// 	return this.state;
		// };

		/**
		 * Function: getCell
		 * 
		 * Returns the <mxCell> in <state> is not null.
		 */
		getCell(): mxCell;
		// {
		// 	var state = this.getState();

		// 	if (state != null)
		// 	{
		// 		return state.cell;
		// 	}

		// 	return null;
		// };

		/**
		 * Function: isPopupTrigger
		 *
		 * Returns true if the event is a popup trigger.
		 */
		isPopupTrigger(): boolean;
		// {
		// 	return mxEvent.isPopupTrigger(this.getEvent());
		// };

		/**
		 * Function: isConsumed
		 *
		 * Returns <consumed>.
		 */
		isConsumed(): boolean;
		// {
		// 	return this.consumed;
		// };

		/**
		 * Function: consume
		 *
		 * Sets <consumed> to true and invokes preventDefault on the native event
		 * if such a method is defined. This is used mainly to avoid the cursor from
		 * being changed to a text cursor in Webkit. You can use the preventDefault
		 * flag to disable this functionality.
		 * 
		 * Parameters:
		 * 
		 * preventDefault - Specifies if the native event should be canceled. Default
		 * is true.
		 */
		consume(preventDefault: boolean): void;
		// {
		// 	preventDefault = (preventDefault != null) ? preventDefault : true;

		// 	if (preventDefault && this.evt.preventDefault)
		// 	{
		// 		this.evt.preventDefault();
		// 	}

		// 	// Workaround for images being dragged in IE
		// 	// Does not change returnValue in Opera
		// 	if (mxClient.IS_IE)
		// 	{
		// 		this.evt.returnValue = true;
		// 	}

		// 	// Sets local consumed state
		// 	this.consumed = true;
		// };
	}
}