$(document).ready(function () {
  var goStart = $('.go')
  var goClaw = $('.claw')
  var Aul = $('#scrollDiv').find("ul")

  $.ajax({
    //请求方式
    type: "GET",
    //文件位置
    url: "http://localhost:5500/list.json",
    //返回数据格式为json,也可以是其他格式如
    dataType: "json",
    //请求成功后要执行的函数，拼接html
    success: function (data) {
      var html = '';
      var list_ = data;
      for (let i = 0; i < list_.list.length; i++) {
        html += `<li>${list_.list[i].text}</li>`;
      }
      // console.log(html)
      Aul.html(html)
    }
  });

  goStart.click(function () {
    goClaw.animate({ top: '0px' }, 1000);
    setTimeout(function () {
      //弹窗出现  回位
      $(".el-model_page4").show();
      goClaw.css('top', '-172px')
    }, 1300);
  })

  $('.put_but').click(function () {
    $(".el-model_page5").show();
  })
});
