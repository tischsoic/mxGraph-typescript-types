declare module "mxgraphAllClasses" {
	interface mxMultiplicityConstructor {
		new (source: boolean, type, attr?, value?: string, min?: number, max?: number,
		validNeighbors?, countError?, typeError?, validNeighborsAllowed?: boolean): mxMultiplicity;
	}
/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxMultiplicity
 * 
 * Defines invalid connections along with the error messages that they produce.
 * To add or remove rules on a graph, you must add/remove instances of this
 * class to <mxGraph.multiplicities>.
 * 
 * Example:
 * 
 * (code)
 * graph.multiplicities.push(new mxMultiplicity(
 *   true, 'rectangle', null, null, 0, 2, ['circle'],
 *   'Only 2 targets allowed',
 *   'Only circle targets allowed'));
 * (end)
 * 
 * Defines a rule where each rectangle must be connected to no more than 2
 * circles and no other types of targets are allowed.
 * 
 * Constructor: mxMultiplicity
 * 
 * Instantiate class mxMultiplicity in order to describe allowed
 * connections in a graph. Not all constraints can be enforced while
 * editing, some must be checked at validation time. The <countError> and
 * <typeError> are treated as resource keys in <mxResources>.
 * 
 * Parameters:
 * 
 * @param source - Boolean indicating if this rule applies to the source or target
 * terminal.
 * @param type - Type of the source or target terminal that this rule applies to.
 * See <type> for more information.
 * @param attr - Optional attribute name to match the source or target terminal.
 * @param value - Optional attribute value to match the source or target terminal.
 * @param min - Minimum number of edges for this rule. Default is 1.
 * @param max - Maximum number of edges for this rule. n means infinite. Default
 * is n.
 * @param validNeighbors - Array of types of the opposite terminal for which this
 * rule applies.
 * @param countError - Error to be displayed for invalid number of edges.
 * @param typeError - Error to be displayed for invalid opposite terminals.
 * @param validNeighborsAllowed - Optional boolean indicating if the array of
 * opposite types should be valid or invalid.
 */
export class mxMultiplicity {
	constructor(source: boolean, type, attr?, value?: string, min?: number, max?: number,
		validNeighbors?, countError?, typeError?, validNeighborsAllowed?: boolean);
	// {
	// 	this.source = source;
	// 	this.type = type;
	// 	this.attr = attr;
	// 	this.value = value;
	// 	this.min = (min != null) ? min : 0;
	// 	this.max = (max != null) ? max : 'n';
	// 	this.validNeighbors = validNeighbors;
	// 	this.countError = mxResources.get(countError) || countError;
	// 	this.typeError = mxResources.get(typeError) || typeError;
	// 	this.validNeighborsAllowed = (validNeighborsAllowed != null) ?
	// 		validNeighborsAllowed : true;
	// };

	/**
	 * Variable: type
	 * 
	 * Defines the type of the source or target terminal. The type is a string
	 * passed to <mxUtils.isNode> together with the source or target vertex
	 * value as the first argument.
	 */
	type; //null

	/**
	 * Variable: attr
	 * 
	 * Optional string that specifies the attributename to be passed to
	 * <mxUtils.isNode> to check if the rule applies to a cell.
	 */
	attr; //null

	/**
	 * Variable: value
	 * 
	 * Optional string that specifies the value of the attribute to be passed
	 * to <mxUtils.isNode> to check if the rule applies to a cell.
	 */
	value: string; //null

	/**
	 * Variable: source
	 * 
	 * Boolean that specifies if the rule is applied to the source or target
	 * terminal of an edge.
	 */
	source: boolean; //null

	/**
	 * Variable: min
	 * 
	 * Defines the minimum number of connections for which this rule applies.
	 * Default is 0.
	 */
	min: number; //null

	/**
	 * Variable: max
	 * 
	 * Defines the maximum number of connections for which this rule applies.
	 * A value of 'n' means unlimited times. Default is 'n'. 
	 */
	max: number; //null

	/**
	 * Variable: validNeighbors
	 * 
	 * Holds an array of strings that specify the type of neighbor for which
	 * this rule applies. The strings are used in <mxCell.is> on the opposite
	 * terminal to check if the rule applies to the connection.
	 */
	validNeighbors; //null

	/**
	 * Variable: validNeighborsAllowed
	 * 
	 * Boolean indicating if the list of validNeighbors are those that are allowed
	 * for this rule or those that are not allowed for this rule.
	 */
	validNeighborsAllowed: boolean; //true

	/**
	 * Variable: countError
	 * 
	 * Holds the localized error message to be displayed if the number of
	 * connections for which the rule applies is smaller than <min> or greater
	 * than <max>.
	 */
	countError; //null

	/**
	 * Variable: typeError
	 * 
	 * Holds the localized error message to be displayed if the type of the
	 * neighbor for a connection does not match the rule.
	 */
	typeError; //null

	/**
	 * Function: check
	 * 
	 * Checks the multiplicity for the given arguments and returns the error
	 * for the given connection or null if the multiplicity does not apply.
	 *  
	 * Parameters:
	 * 
	 * graph - Reference to the enclosing <mxGraph> instance.
	 * edge - <mxCell> that represents the edge to validate.
	 * source - <mxCell> that represents the source terminal.
	 * target - <mxCell> that represents the target terminal.
	 * sourceOut - Number of outgoing edges from the source terminal.
	 * targetIn - Number of incoming edges for the target terminal.
	 */
	check(graph: mxGraph, edge: mxCell, source: mxCell, target: mxCell, sourceOut: number, targetIn: number): string | null;
	// {
	// 	var error = '';

	// 	if ((this.source && this.checkTerminal(graph, source, edge)) ||
	// 		(!this.source && this.checkTerminal(graph, target, edge)))
	// 	{
	// 		if (this.countError != null && 
	// 			((this.source && (this.max == 0 || (sourceOut >= this.max))) ||
	// 			(!this.source && (this.max == 0 || (targetIn >= this.max)))))
	// 		{
	// 			error += this.countError + '\n';
	// 		}

	// 		if (this.validNeighbors != null && this.typeError != null && this.validNeighbors.length > 0)
	// 		{
	// 			var isValid = this.checkNeighbors(graph, edge, source, target);

	// 			if (!isValid)
	// 			{
	// 				error += this.typeError + '\n';
	// 			}
	// 		}
	// 	}
		
	// 	return (error.length > 0) ? error : null;
	// };

	/**
	 * Function: checkNeighbors
	 * 
	 * Checks if there are any valid neighbours in <validNeighbors>. This is only
	 * called if <validNeighbors> is a non-empty array.
	 */
	checkNeighbors(graph: mxGraph, edge: mxCell, source: mxCell, target: mxCell): boolean;
	// {
	// 	var sourceValue = graph.model.getValue(source);
	// 	var targetValue = graph.model.getValue(target);
	// 	var isValid = !this.validNeighborsAllowed;
	// 	var valid = this.validNeighbors;
		
	// 	for (var j = 0; j < valid.length; j++)
	// 	{
	// 		if (this.source &&
	// 			this.checkType(graph, targetValue, valid[j]))
	// 		{
	// 			isValid = this.validNeighborsAllowed;
	// 			break;
	// 		}
	// 		else if (!this.source && 
	// 			this.checkType(graph, sourceValue, valid[j]))
	// 		{
	// 			isValid = this.validNeighborsAllowed;
	// 			break;
	// 		}
	// 	}
		
	// 	return isValid;
	// };

	/**
	 * Function: checkTerminal
	 * 
	 * Checks the given terminal cell and returns true if this rule applies. The
	 * given cell is the source or target of the given edge, depending on
	 * <source>. This implementation uses <checkType> on the terminal's value.
	 */
	checkTerminal(graph: mxGraph, terminal: mxCell, edge: mxCell): boolean;
	// {
	// 	var value = graph.model.getValue(terminal);
		
	// 	return this.checkType(graph, value, this.type, this.attr, this.value);
	// };

	/**
	 * Function: checkType
	 * 
	 * Checks the type of the given value.
	 */
	checkType(graph: mxGraph, value, type, attr, attrValue): boolean;
	// {
	// 	if (value != null)
	// 	{
	// 		if (!isNaN(value.nodeType)) // Checks if value is a DOM node
	// 		{
	// 			return mxUtils.isNode(value, type, attr, attrValue);
	// 		}
	// 		else
	// 		{
	// 			return value == type;
	// 		}
	// 	}
		
	// 	return false;
	// };
}
}