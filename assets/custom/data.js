function setup_data_model(title, core_list) {
    $('#m_box_1_2Label').text(title);
    var code = '';
    var dem = 1;
    core_list.forEach(core => {
        code += '<tr><th scope="row" class="text-center">'+ (dem ++) +'</th><td>' +  core + '</td></tr>';
    });
    $('#content-main').html(code)
}