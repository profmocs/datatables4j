<h3>Configuration properties</h3>

<h4>Description</h4>

DataTables4j embeds a configuration file which store all default properties.

<h4>Reference</h4>

<table id="tagReference" class="table table-striped table-bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Value(s)</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>datatables4j.compressor.enable</td>
    <td>Enable or disable the web resources compression</td>
    <td>java.lang.Boolean</td>
    <td>true|false</td>
    <td>false</td>
  </tr>
  <tr>
    <td>datatables4j.compressor.class</td>
    <td>Java class name for the compressor implementation. By default, DataTables4j uses the YuiCompressor library.</td>
    <td>java.lang.String</td>
    <td></td>
    <td>org.datatables4j.compressor.YuiResourceCompressor</td>
  </tr>
  <tr>
    <td>datatables4j.aggregator.enable</td>
    <td>Enable or disable the web resources aggregation</td>
    <td>java.lang.Boolean</td>
    <td>true|false</td>
    <td>false</td>
  </tr>
  <tr>
    <td>datatables4j.aggregator.mode</td>
    <td>Specify the aggregation mode.</td>
    <td>java.lang.String</td>
    <td>ALL|PLUGINS_JS|PLUGINS_CSS</td>
    <td>ALL</td>
  </tr>
  <tr>
    <td>datatables4j.datasource.class</td>
    <td>Java class name of the Ajax data source provider. By default, DataTables4j uses Jersey but you can use your own.</td>
    <td>java.lang.String</td>
    <td></td>
    <td>org.datatables4j.datasource.JerseyDataProvider</td>
  </tr>
  </tbody>
</table>

<link rel="stylesheet" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/css/jquery.dataTables.css" />
<link rel="stylesheet" href="./css/tabletag.css" />
<script src="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/jquery.dataTables.min.js" ></script>
<script src="./js/datatables.fixedheader.min.js" ></script>
<script src="./js/tagreference.js" ></script>