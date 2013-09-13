#Bootstrap 3 Grid Columns Clearing

By adding the `js/ie-row-fix.js` file and either the `css/multi-columns-row.css` or compiling the `less/multi-columns-row.less` file with Bootstrap 3 you can add
support for clearing columns in a row.

#Why?

Let's say you are iterating over a big loop of items and want them all to be in a nice grid. And, let's say that on desktops you want 6 columns `col-lg-2` and on tablets you want 4 columns `col-sm-3` and on phones you want 2 columns `col-xs-6`. This can't be accomplished using multiple rows. You need to place all of the elements in 1 row. When you do this and the elements in the grid are not all the same height, the stacking goes to hell. This fix makes everything work by adding a clear:left to the first item in each row based on the current min-width and the grid you are using.

This works for any grid where all columns are the same for the particular grid size and add up to 12. 

	col-xs-1 (phone 12 columns)
	col-xs-2 (phone 6 columns) 
	col-xs-3 (phone 4 columns)
	col-xs-4 (phone 3 columns)
	col-xs-6 (phone 2 columns)

	col-sm-1 (tablet 12 columns)
	col-sm-2 (tablet 6 columns)
	col-sm-3 (tablet 4 columns)
	col-sm-4 (tablet 3 columns)
	col-sm-6 (tablet 2 columns)

	col-md-1 (desktop 12 columns)
	col-md-2 (desktop 6 columns)
	col-md-3 (desktop 4 columns)
	col-md-4 (desktop 3 columns)
	col-md-6 (desktop 2 columns)

	col-lg-1 (large desktop 12 columns)
	col-lg-2 (large desktop 6 columns)
	col-lg-3 (large desktop 4 columns)
	col-lg-4 (large desktop 3 columns)
	col-lg-6 (large desktop 2 columns)

See the `example.html` page for sample markup and working demo.

Quick note to make this work correctly you need to use all grid definitions from the starting column size. Example:

	<div class="row multi-columns-row">
		<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">...</div>
		<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">...</div>
		<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">...</div>
		<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">...</div>
		<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">...</div>
		<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">...</div>
	</div>
	
	<div class="row multi-columns-row">
		<div class="col-sm-4 col-md-3 col-lg-3">...</div>
		<div class="col-sm-4 col-md-3 col-lg-3">...</div>
		<div class="col-sm-4 col-md-3 col-lg-3">...</div>
		<div class="col-sm-4 col-md-3 col-lg-3">...</div>
		<div class="col-sm-4 col-md-3 col-lg-3">...</div>
		<div class="col-sm-4 col-md-3 col-lg-3">...</div>
	</div>
	
	<div class="row multi-columns-row">
		<div class="col-md-4 col-lg-3">...</div>
		<div class="col-md-4 col-lg-3">...</div>
		<div class="col-md-4 col-lg-3">...</div>
		<div class="col-md-4 col-lg-3">...</div>
		<div class="col-md-4 col-lg-3">...</div>
		<div class="col-md-4 col-lg-3">...</div>
	</div>
	
	<div class="row multi-columns-row">
		<div class="col-lg-3">...</div>
		<div class="col-lg-3">...</div>
		<div class="col-lg-3">...</div>
		<div class="col-lg-3">...</div>
		<div class="col-lg-3">...</div>
		<div class="col-lg-3">...</div>
	</div>
