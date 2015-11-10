###loader
简单的Loading效果

####一般应用
```html
<div>
    <div class="loader"></div>
</div>
<script>
	$(document).ready(function(){
	    $(".loader").loaderOn();
	    setTimeout(function(){
	        // $(".loader").loaderOff();
	    }, 2000);
	});
</script>
```

####常用配置
|字段名|默认值|类型|描述|
|------|------|----|----|
|zIndex|10|number|z-index|
|bgColor|'rgba(0, 0, 0, 0.3)'|string|背景色|
|spinner|'spinner01'|string|loading样式(01-07)|
