import { User } from '../models/User.js'

class AuthController {
	async registration(req, res) {
		try {
			const { username } = req.body
			const candidate = await User.findOne({ username: username })

			if (candidate) {
				return res.status(400).json({ message: "Пользователь с таким именем уже сущестует" })
			}

			// const user = new User({ ...req.body, role: 'Админ' })
			const user = new User({ ...req.body, role: 'Пользователь' })

			await user.save()

			return res.status(200).json({ message: "Успешно" })
		} catch (error) {
			console.log(e);
			res.status(400).json({ message: 'Registation Error' })
		}
	}
	async login(req, res) {
		try {
			const { username, password } = req.body
			const user = await User.findOne({ username: username })

			if (!user) {
				return res.status(400).json({ message: 'Пользователь с таким ником не найден' })
			}

			if (password !== user.password) {
				return res.status(400).json({ message: 'Неверный пароль' })
			}

			return res.json(await User.findOne({ username: username }, { password: 0 }))
		} catch (error) {
			console.log(e);
			res.status(400).json({ message: 'Login Error' })
		}
	}
	async userInfo(req, res) {
		try {
			const user = await User.findOne({ username: req.params.username }, { password: 0 })

			return user
		} catch (error) {
			console.log(e);
		}
	}
}

export const authController = new AuthController()