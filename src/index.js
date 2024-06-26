import './base.css'
import './img/t_bg.png'
import './img/top_img_bg.png'
import 'core-js/features/array/flat'

// import 'core-js';
// import 'core-js/stable';
// import "regenerator-runtime/runtime";
var cpuData = [
    ['', '', '', '', '', '', '', '', 'A12Z/A12X', '', ''],
    ['', '', '', '', '', '', '', '', 'A14', '', ''],
    ['', '', '', '', '骁龙888<br/>骁龙888 Plus', 'Exynos 2100', '', '麒麟9000', 'A13', '', ''],
    ['', '', '', '', '骁龙865<br/>骁龙870', '', '', '', 'A12', '', ''],
    ['', '', '', '', '', 'Exynos 1080', '天玑1200', '', '', '', ''],
    ['', '', '', '', '', '', '天玑1100<br/>迅鲲1300T', '', '', '', ''],
    ['', '', '', '', '', '', '天玑1000Plus', '麒麟990', '', '', ''],
    ['', '', '', '骁龙780', '骁龙860<br/>骁龙855 Plus<br/>骁龙855', '', '天玑1000L', '', 'A10X/A11', '', ''],
    ['', '', '', '骁龙778', '', '', '', '', '', '', ''],
    ['', '', '', '', '', 'Exynos 990', '天玑820', '麒麟985/麒麟820/麒麟980', '', '', ''],
    ['', '', '', '骁龙768G', '骁龙845', 'Exynos 9820', '天玑900', '', '', '', ''],
    ['', '', '', '骁龙765G/750G', '', '', '天玑800/800U', '麒麟810', 'A9X/A10', '', ''],
    ['', '', '', '骁龙720G<br/>骁龙730<br/>骁龙730G', '骁龙835', 'Exynos 9810', 'Helio G90T<br/>天玑720', '', '', '', ''],
    ['', '', '骁龙480', '', '', 'Exynos 980', '天玑700', '麒麟970', '', '', ''],
    ['', '', '', '骁龙712', '', 'Exynos 8895', '', '', '', '', ''],
    ['', '', '', '骁龙710', '', '', 'Helio G85', '麒麟960', 'A9', '', ''],
    ['', '', '', '骁龙675', '骁龙821', '', 'Helio X30', '', '', '', 'Tegra K1'],
    ['', '', '', '骁龙670', '骁龙820', '', 'Helio G80', '', 'A8X', '', ''],
    ['', '', '', '', '骁龙820降频版', 'Exynos 8890', '', '', '', '', ''],
    ['', '', '', '骁龙660', '', '', 'Helio P60', '麒麟710', '', '', ''],
    ['', '', '', '骁龙665', '', '', 'Helio X27', '麒麟955', '', '', ''],
    ['', '', '', '骁龙662', '', '', '', '麒麟950', '', '', ''],
    ['', '', '', '', '', 'Exynos 7420', 'Helio X25', '', '', '', ''],
    ['', '', '', '', '', '', 'Helio X23', '', '', '', ''],
    ['', '', '', '骁龙653', '骁龙810', '', 'Helio X20', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '骁龙652/636', '', '', '', '', '', '', ''],
    ['', '', '', '骁龙650', '', '', '', '', 'A8', '', ''],
    ['', '', '', '', '骁龙808', '', '', '麒麟935', '', '', 'Tegra K1'],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', 'Exynos 5433', '', '麒麟930', '', '', ''],
    ['', '', '', '骁龙632', '', '', '', '麒麟659', '', '', ''],
    ['', '', '骁龙460', '骁龙626<br/>骁龙630', '骁龙805', '', 'P35（MT6765）', '麒麟650', '', '', ''],
    ['', '', '', '骁龙625', '骁龙801<br/>(MSM8x74AC)', 'Exynos 5430', 'Helio P23/X10', '', 'A7', 'Z3590', ''],
    ['', '', '', '', '骁龙801<br/>(MSM8x74AB)', 'Exynos 7870', 'Helio G25/P30<br/>/P25/P15/P20', '', '', 'Z3580', ''],
    ['', '', '', '', '骁龙801<br/>(MSM8x74AA)', 'Exynos 7580', 'Helio P10<br/>MT6752/M', '', '', 'Z3570', ''],
    ['', '', '', '', '', 'Exynos 5433', 'MT6753', '', '', 'Z3560', ''],
    ['', '', '', '', '', '', 'MT6750', '', '', '', ''],
    ['', '', '', '', '', '', 'MT6739', '', '', '', ''],
    ['', '', '骁龙450', '', '', '', 'MT6735', '', '', '', ''],
    ['', '', '骁龙439', '', '', 'Exynos 5800', '', '', '', '', ''],
    ['', '', '', '', '', 'Exynos 5430', '', '', '', 'Z3530', ''],
    ['', '', '', '', '', 'Exynos 5422', '', '麒麟620', '', '', ''],
    ['', '', '骁龙435', '骁龙617', '骁龙800', 'Exynos 5420', 'MT6595/T', '麒麟928', '', 'Z3480', 'Tegra 4'],
    ['', '', '骁龙430', '骁龙616', '', 'Exynos 5410', 'MT6592', '麒麟925', '', 'Z3460', ''],
    ['', '', '骁龙427', '骁龙615', '', '', '', '麒麟920', '', '', 'Tegra 4i'],
    ['APQ8064', '', '骁龙425', '骁龙600', '', 'Exynos 5260', '', 'K3V2+<br/>(麒麟910)', '', '', ''],
    ['', '', '', '', '', '', '', '', '', 'Z3580', ''],
    ['', '骁龙212', '', '骁龙610', '', '', '', '', '', '', ''],
    ['', '骁龙210', '骁龙412', '', '', 'Exynos 5250', '', '', 'A6X', '', ''],
    ['MSM8960T', '骁龙208', '骁龙410', '', '', 'Exynos 4412', '', '', 'A6', 'Z3480', ''],
    ['MSM8260A<br/>/8660A/8960', '骁龙200<br/>(MSM8x12)', '骁龙400', '', '', '', '', 'K3V2E', '', 'Z2580', ''],
    ['', '骁龙200<br/>(MSM8x10)', '', '', '', '', '', 'K3V2', '', '', 'Tegra 3'],
    ['', '', '', '', '', '', '', '', '', 'Z2480', ''],
    ['', '', '骁龙400', '', '', '', 'MT6589<br/>MT6582', '', 'A5X', 'Z2460', ''],
    ['', '骁龙200<br/>(MSM8x25Q)', '', '', '', '', '', '', 'A5', '', ''],
    ['MSM8260<br/>/8660', '', '', '', '', 'Exynos 4210<br/>/4212', '', '', '', 'Z2420', ''],
    ['MSM8225<br/>/8625', '', '', '', '', '', 'MT6577/6572', '', '', '', 'Tegra 2'],
    ['MSM8255T<br/>/8655T', '', '', '', '', '', '', '', '', '', ''],
    ['MSM8255<br/>/8655<br/>/APQ8055', '', '', '', '', 'Exynos 3475', 'MT6515/6175', '', '', '', ''],
    ['MSM7230<br/>/7630', '', '', '', '', '', 'MT6515M', '', 'A4', '', ''],
    ['QSD8650<br/>/8250', '', '', '', '', 'Exynos 3110', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['MSM7627A<br/>/7227A', '', '', '', '', '', '', '', '', '', ''],
    ['MSM7627T<br/>/7227T', '', '', '', '', '', '', '', '', '', ''],
    ['MSM7627<br/>/7227', '', '', '', '', 'S5PC100', '', '', '', '', ''],
    ['', '', '', '', '', 'S5L8900', 'MT6573/13', '', '', '', 'Tegra'],
    ['', '', '', '', '', '', 'MT6516', '', '', '', '']
]
try {
    var newcpuData = cpuData
        .map((v) =>
            v.map((x, i, arr) => {
                var temp = ``
                if (i === 0) {
                    temp = `<tr><td class="content">${x}</td>`
                } else if (i === arr.length - 1) {
                    temp = `<td class="content">${x}</td></tr>`
                } else {
                    temp = `<td class="content">${x}</td>`
                }
                return temp
            })
        )
        .flat()
        .join('')
    // console.log(newcpuData);
    var tbody = document.querySelector('#tbody')
    // console.log(tbody);
    tbody.insertAdjacentHTML('beforeend', newcpuData)
    // 背景高亮
    const specialCPU = ['天玑900','迅鲲1300T','骁龙860','骁龙778','Exynos 2100']
    var content = document.querySelectorAll('td.content')
    for (var key of content) {
        specialCPU.forEach(v => {
            if (key.textContent.includes(v)) {
                key.classList.add('newCpu')
            }
        })
        // Unlisted.forEach(v => {
        //     if (key.textContent.includes(v)) {
        //         key.classList.add('unlisted')
        //     }
        // })
    }
    tbody.addEventListener('dblclick', function (e) {
        console.log('hah', e);
        console.log('hah', e.target.innerText);
        try {
            var txt = e.target.innerText
            if(txt.includes('骁龙') || txt.includes('MSM')) {
                window.open('https://www.mydrivers.com/zhuanti/tianti/01/index_gaotong.html')
            } else if(txt.includes('Exynos')) {
                window.open('https://www.mydrivers.com/zhuanti/tianti/01/index_other.html#samsung')
            } else if(txt.includes('麒麟')) {
                window.open('https://www.mydrivers.com/zhuanti/tianti/01/index_other.html#huawei')
            } else if(txt.includes('天玑') || txt.includes('Helio') || txt.includes('MT')) {
                window.open('https://www.mydrivers.com/zhuanti/tianti/01/index_other.html#mediatek')
            } else if(txt.includes('A')) {
                window.open('https://www.mydrivers.com/zhuanti/tianti/01/index_other.html#apple')
            }
        } catch (error) {
            
        }
    })
} catch (error) {
    alert(error)
}
