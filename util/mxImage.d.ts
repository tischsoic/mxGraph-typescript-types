declare module "mxgraphAllClasses" {
	interface mxImageConstructor {
		new (src: string, width: number, height: number): mxImage;
	}
	/**
	 * Copyright (c) 2006-2015, JGraph Ltd
	 * Copyright (c) 2006-2015, Gaudenz Alder
	 */
	/**
	 * Class: mxImage
	 *
	 * Encapsulates the URL, width and height of an image.
	 * 
	 * Constructor: mxImage
	 * 
	 * Constructs a new image.
	 */
	export class mxImage {
		constructor(src: string, width: number, height: number);

		// function mxImage(src, width, height)
		// {
		// 	this.src = src;
		// 	this.width = width;
		// 	this.height = height;
		// };

		/**
		 * Variable: src
		 *
		 * String that specifies the URL of the image.
		 */
		src: string;

		/**
		 * Variable: width
		 *
		 * Integer that specifies the width of the image.
		 */
		width: number;

		/**
		 * Variable: height
		 *
		 * Integer that specifies the height of the image.
		 */
		height: number;
	}
}