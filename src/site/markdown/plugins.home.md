<h3>Plugins</h3>

<h4>Introduction</h4>

[DataTables](http://datatables.net "DataTables") provides lots of plugins. Some are natives (developed by [SpryMedia](http://www.sprymedia.co.uk/), creator of Datatables), other are third-party, but whatever the origin it always adds an amazing user experience.

<h4>How it works ?</h4>

In <strong>DataTables4j</strong>, native plugins are considered as <i>internal plugin</i>. That is to say all plugin sources (Javascript and/or CSS) are embedded in the framework. In this way, <strong>DataTables4j</strong> is able to inject the configuration wherever it is needed, compress it or even aggregate multiple files, depending on your configuration choice and of course, if multiple files are needed to use a plugin.

For now, <strong>DataTables4j</strong> embeds a few native plugins, more will be added over the time.

Some extension points are planned, in order to allow external plugins scanning.

<h4>Available plugins</h4>

 * [FixedHeader](./plugins.fixedheader.html "FixedHeader")
 * [Scroller](./plugins.scroller.html "Scroller")
 * [ColReorder](./plugins.colreorder.html "ColReorder")