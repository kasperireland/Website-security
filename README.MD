filter_var<br>
mysqli_real_escape_string<br>
htmlspecialchars<br>
urlencode<br>
encryption password

# Making links not being displayed when click on link
```<span data-href="example.php">example</span>
<script src="hideurlfrombrowsertaskbar.js"></script>
```

# Prevent xss javscript 
```<script type="text/javascript" src="xss.js"></script>
<input id="search" onchange="return trim(this)" class="box">
```
