const debug = {

	success : val => console.log(`✅  : ${val}`),
	error : val => console.log(`⛔️  : ${val}`),

	msg : (emoji, val) => console.log(`${emoji}  ${val}`),

	full : (arg, text = null) => {
		console.log(`======== [ 💥  ] ========`)
		
		if(text){
			console.log(`✏️ 📄  : ${text}`)
			console.log(`========================`)
		}

		console.log(arg)
		console.log(`========================`)
	}
}

export default debug