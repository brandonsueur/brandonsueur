import { datetime } from "./time";

const log = {
	success : val => console.log(`✅  : ${val}`),
	error : val => console.log(`⛔️  : ${val}`),

	msg : (emoji, val) => console.log(`${emoji}  ${val}`),

  debug: val => {
	  console.log('🕒 : '+ datetime)
		console.log(val)
  }
}

export default log
