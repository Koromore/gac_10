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
    
    var input_name = $(".input_name").val();
    var input_number = $(".input_number").val();
    var input_address = $(".input_address").val();
    
    if (input_name == '') {
      alert("姓名不能为空！");
      // return false;
    }else if(!(/^1[3456789]\d{9}$/.test(input_number))){
      alert("手机号码有误，请重填！");
    }else if(input_address == ''){
      alert("地址不能为空！");
    }else{
      $(".el-model_page5").show();
    }
    // $.ajax({
    //   //请求方式
    //   type: "POST",
    //   //文件位置
    //   url: "http://localhost:5500/list.json",
    //   data: {},
    //   //返回数据格式为json,也可以是其他格式如
    //   dataType: "json",
    //   //请求成功后要执行的函数，拼接html
    //   success: function (data) {
    //     var html = '';
    //     var list_ = data;
    //     for (let i = 0; i < list_.list.length; i++) {
    //       html += `<li>${list_.list[i].text}</li>`;
    //     }
    //     // console.log(html)
    //     Aul.html(html)
    //   }
    // });
  })
});
