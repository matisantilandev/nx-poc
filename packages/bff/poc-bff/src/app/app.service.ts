import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	getData(): { message: string } {
		return { message: 'Hello API' }
	}

	getPOCInfo(): { message: string } {
		return { message: 'POC Info' }
	}
}
