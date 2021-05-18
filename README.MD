filter_var<br>
mysqli_real_escape_string<br>
htmlspecialchars<br>
urlencode<br>
encryption password

# Making links not being displayed when click on link
```
<span data-href="example.php">example</span>
<script src="hideurlfrombrowsertaskbar.js"></script>
```

# Prevent xss javscript 
```
<script type="text/javascript" src="xss.js"></script>
<input id="search" onchange="return trim(this)" class="box">
```

# Disable inspect element
```
<script src="disableinspect.js"></script>
```

# Disbale context menu, dragstart, selectstart
```
<body oncontextmenu="return false" ondragstart="return false" onselectstart="return false">
```

# csrf token prevention
```
<?php include "csrf.php";?> 
<input type="hidden" name="csrf" value="<?php echo $csrf ?>">
```

# Password Encryption
```
$password = "geeks";
$md5 = md5($password);
$sha1 = sha1($md5);
$base64_encode = base64_encode($sha1);
$crc32 = crc32($base64_encode);
$string = 'megamind';
$pw = $md5.$crc32.$salt.$sha1.$base64_encode;
echo $pw;
Output: 68cab0e096d60f6eac1ca357dd86c5641642962700megamind1958a94524d5b3b73d18dd3c630aeb2cf94f843aMTk1OGE5NDUyNGQ1YjNiNzNkMThkZDNjNjMwYWViMmNmOTRmODQzYQ==```
