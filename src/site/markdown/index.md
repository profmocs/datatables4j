<h3>Overview</h3>
<hr />

<img src="./images/logo_DataTables.jpg" style="float: right;" />

 **DataTables4j** is an open-source taglib that allows you to quickly create HTML table in your Java/JEE based web application without even writing any HTML or Javascript code !

 **DataTables4j** will handle all the HTML and Javascript code generation needed by the amazing [DataTables](http://datatables.net "DataTables") jQuery plugin, depending on how you configured the JSP tags.

<u>N.B.:</u> This library is highly inspired by the excellent [DisplayTag](http://displaytag.sourceforge.net "DisplayTag") framework. 

<br />
<h4>Usage</h4>

Once DataTables4j installed (see the [installation guide](./main.install.html "Go to the installation guide")) and considering <tt>persons</tt> as a <i>java.util.Collection</i> in the request scope, just add the following lines in your JSP :

    <datatables:table id="myTableId" data="${persons}">
        <datatables:column title="Id" property="id" />
        <datatables:column title="FirstName" property="firstName" />
        <datatables:column title="LastName" property="lastName" />
        <datatables:column title="Street" property="address.street1" />
        <datatables:column title="Mail" property="mail" />
    </datatables:table>


That\'s all ! **DataTables4j** will generate HTML code (the HTML <tt>&lt;table&gt;</tt> tag) and all the Javascript code required by [DataTables](http://datatables.net "DataTables") to build and prettify your table. 

<br />
<h4>Bug / Enhancement</h4>
Please use the [GitHub issue page](https://github.com/datatables4j/datatables4j-core/issues "Go to GitHub issue page").

<br />
<h4>Help</h4>
Please use the [DataTables forum](http://datatables.net/forums/discussion/1013 "Go to DataTables forum").

<br />
<h4>License</h4>
**DataTables4j** is licensed under the [GPLv2](http://www.gnu.org/licenses/gpl-2.0.html "GPLv2") licence and use [DataTables](http://datatables.net "DataTables") under the [BSD](http://datatables.net/license_bsd "BSD") one.
 