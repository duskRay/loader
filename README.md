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
|parent|父节点|string|loading效果会填充并覆盖至该节点|
|timeToHide|null|int|持续时间(毫秒)，默认一直持续直到主动取消|
|bgColor|'rgba(255, 255, 255, 0.5)'|string|背景色|
|spinner|'spinner1'|string|loading样式(1-7)|
|imagePath|''|string|自定义图片url|
