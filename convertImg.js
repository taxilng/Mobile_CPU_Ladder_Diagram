const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 输入和输出文件夹路径
const inputFolder = './images';
const outputFolder = './img';

// 确保输出文件夹存在
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

// 读取输入文件夹中的所有文件
fs.readdir(inputFolder, (err, files) => {
    if (err) {
        console.error('无法读取输入文件夹:', err);
        return;
    }

    // 过滤出所有的 JPEG 文件
    const jpgFiles = files.filter(file => ['.jpg', '.png'].includes(path.extname(file).toLowerCase()));

    // 遍历所有 JPEG 文件并转换为 WebP
    jpgFiles.forEach(file => {
        const inputFilePath = path.join(inputFolder, file);
        const outputFilePath = path.join(outputFolder, path.basename(file, path.extname(file)) + '.webp');

        // 使用 sharp 进行转换
        sharp(inputFilePath)
            .webp()
            .toFile(outputFilePath, (err, info) => {
                if (err) {
                    console.error(`转换文件 ${file} 失败:`, err);
                } else {
                    console.log(`文件 ${file} 转换成功:`, info);
                }
            });
    });
});