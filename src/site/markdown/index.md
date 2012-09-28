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
 
<br />
<h4>Donate</h4>
If you enjoy using <strong>DataTables4j</strong>, feel free to share it on Twitter or/and make a donation, it's always motivating ! :-)

<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1" />
</form>