let otvet = document.getElementById('otvet')
const s7 = document.getElementById('s7')
const s8 = document.getElementById('s8')
const s9 = document.getElementById('s9')
const s4 = document.getElementById('s4')
const s5 = document.getElementById('s5')
const s6 = document.getElementById('s6')
const s1 = document.getElementById('s1')
const s2 = document.getElementById('s2')
const s3 = document.getElementById('s3')
const s0 = document.getElementById('s0')
const sPlus = document.getElementById('+')
const sMinus = document.getElementById('-')
const sUnm = document.getElementById('*')
const sRozd = document.getElementById('/')
const Ravno = document.getElementById('=')
const Back = document.getElementById('<')
let Znak
let value1
let value2
let i

// Без коментариев)) 

const back = function Back() {
	if (otvet.textContent !== '0') {
		const sims = otvet.textContent.split('')
		const sim = sims.pop()

		if (sim === Znak) {
			Znak = ''
			otvet.textContent = sims.join('')
		} else {
			otvet.textContent = sims.join('')
		}
	}
}

const constRavno = function ravno() {
	if (otvet.textContent !== '0') {

		value2 = Number(otvet.textContent.split(Znak)[1])
		value1 = Number(value1)

		if (value2 !== '' && value2 !== Infinity && value2 !== null && value2 !== undefined) {
			if (i === true && value2 === 0) {
				if (Znak === '+') {
					otvet.textContent = value1 + value2
				} else if (Znak === '-') {
					otvet.textContent = value1 - value2
				} else if (Znak === '*') {
					otvet.textContent = value1 * value2
				} else if (Znak === '/') {
					otvet.textContent = value1 / value2
				}
				Znak = ''
			} else if (i === false && value2 === 0) {
				back()
				Znak = ''
			} else {
				if (Znak === '+') {
					otvet.textContent = value1 + value2
				} else if (Znak === '-') {
					otvet.textContent = value1 - value2
				} else if (Znak === '*') {
					otvet.textContent = value1 * value2
				} else if (Znak === '/') {
					otvet.textContent = value1 / value2
				}
				Znak = ''
			}
		}
		else {
			back()
		}
		if (otvet.textContent == '' || otvet.textContent == Infinity || otvet.textContent == null || otvet.textContent == undefined || otvet.textContent == NaN) {
			otvet.textContent = '0'
		}
	}
}


Ravno.onclick = constRavno

Back.onclick = back


sPlus.onclick = () => {
	if (otvet.textContent !== '0') {
		if (Znak !== '+' && Znak !== '-' && Znak !== '*' && Znak !== '/') {
			value1 = otvet.textContent.toString()
			Znak = sPlus.textContent
			otvet.textContent = otvet.textContent + sPlus.textContent
		} else {
			if (otvet.textContent.split(Znak)[1] !== '' && otvet.textContent.split(Znak)[1] !== Infinity && otvet.textContent.split(Znak)[1] !== null && otvet.textContent.split(Znak)[1] !== undefined) {
				constRavno()
				value1 = otvet.textContent.toString()
				Znak = sPlus.textContent
				otvet.textContent = otvet.textContent + sPlus.textContent
			} else if (Znak !== '') {
				back()
				otvet.textContent = otvet.textContent + sPlus.textContent
				Znak = sPlus.textContent
			}
		}
	}
}

sMinus.onclick = () => {
	if (otvet.textContent !== '0') {
		if (Znak !== '+' && Znak !== '-' && Znak !== '*' && Znak !== '/') {
			value1 = otvet.textContent.toString()
			Znak = sMinus.textContent
			otvet.textContent = otvet.textContent + sMinus.textContent
		} else {
			if (otvet.textContent.split(Znak)[1] !== '' && otvet.textContent.split(Znak)[1] !== Infinity && otvet.textContent.split(Znak)[1] !== null && otvet.textContent.split(Znak)[1] !== undefined) {
				constRavno()
				value1 = otvet.textContent.toString()
				Znak = sMinus.textContent
				otvet.textContent = otvet.textContent + sMinus.textContent
			} else if (Znak !== '') {
				back()
				otvet.textContent = otvet.textContent + sMinus.textContent
				Znak = sMinus.textContent
			}
		}
	}
}

sUnm.onclick = () => {
	if (otvet.textContent !== '0') {
		if (Znak !== '+' && Znak !== '-' && Znak !== '*' && Znak !== '/') {
			value1 = otvet.textContent.toString()
			Znak = sUnm.textContent
			otvet.textContent = otvet.textContent + sUnm.textContent
		} else {
			if (otvet.textContent.split(Znak)[1] !== '' && otvet.textContent.split(Znak)[1] !== Infinity && otvet.textContent.split(Znak)[1] !== null && otvet.textContent.split(Znak)[1] !== undefined) {
				constRavno()
				value1 = otvet.textContent.toString()
				Znak = sUnm.textContent
				otvet.textContent = otvet.textContent + sUnm.textContent
			} else if (Znak !== '') {
				back()
				otvet.textContent = otvet.textContent + sUnm.textContent
				Znak = sUnm.textContent
			}
		}
	}
}

sRozd.onclick = () => {
	if (otvet.textContent !== '0') {
		if (Znak !== '+' && Znak !== '-' && Znak !== '*' && Znak !== '/') {
			value1 = otvet.textContent.toString()
			Znak = sRozd.textContent
			otvet.textContent = otvet.textContent + sRozd.textContent
		} else {
			if (otvet.textContent.split(Znak)[1] !== '' && otvet.textContent.split(Znak)[1] !== Infinity && otvet.textContent.split(Znak)[1] !== null && otvet.textContent.split(Znak)[1] !== undefined) {
				constRavno()
				value1 = otvet.textContent.toString()
				Znak = sRozd.textContent
				otvet.textContent = otvet.textContent + sRozd.textContent
			} else if (Znak !== '') {
				back()
				Znak = sRozd.textContent
				otvet.textContent = otvet.textContent + sRozd.textContent
			}
		}
	}
}






s7.onclick = () => {
	if (otvet.textContent === '0') {
		otvet.textContent = s7.textContent
	} else {
		otvet.textContent = otvet.textContent + s7.textContent
	}
	i = false
}
s8.onclick = () => {
	if (otvet.textContent === '0') {
		otvet.textContent = s8.textContent
	} else {
		otvet.textContent = otvet.textContent + s8.textContent
	}
	i = false
}
s9.onclick = () => {
	if (otvet.textContent === '0') {
		otvet.textContent = s9.textContent
	} else {
		otvet.textContent = otvet.textContent + s9.textContent
	}
	i = false
}
s4.onclick = () => {
	if (otvet.textContent === '0') {
		otvet.textContent = s4.textContent
	} else {
		otvet.textContent = otvet.textContent + s4.textContent
	}
	i = false
}
s5.onclick = () => {
	if (otvet.textContent === '0') {
		otvet.textContent = s5.textContent
	} else {
		otvet.textContent = otvet.textContent + s5.textContent
	}
	i = false
}
s6.onclick = () => {
	if (otvet.textContent === '0') {
		otvet.textContent = s6.textContent
	} else {
		otvet.textContent = otvet.textContent + s6.textContent
	}
	i = false
}
s1.onclick = () => {
	if (otvet.textContent === '0') {
		otvet.textContent = s1.textContent
	} else {
		otvet.textContent = otvet.textContent + s1.textContent
	}
	i = false
}
s2.onclick = () => {
	if (otvet.textContent === '0') {
		otvet.textContent = s2.textContent
	} else {
		otvet.textContent = otvet.textContent + s2.textContent
	}
	i = false
}
s3.onclick = () => {
	if (otvet.textContent === '0') {
		otvet.textContent = s3.textContent
	} else {
		otvet.textContent = otvet.textContent + s3.textContent
	}
	i = false
}
s0.onclick = () => {
	if (otvet.textContent === '0') {
		otvet.textContent = s0.textContent
	} else {
		otvet.textContent = otvet.textContent + s0.textContent
	}
	i = true
}