console.log("hello world");

const { execSync, exec } = require('child_process');
const { argv } = require('process');

console.log(argv[2]);

const res1 = execSync(`conda run -n midas-py310 python run.py --model_type dpt_beit_large_512 --input_path ${argv[2]} --output_path output/`);

console.log(res1.toString());
