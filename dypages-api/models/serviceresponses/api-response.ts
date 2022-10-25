import { BaseServiceResponse } from './base-service-response';
export class ApiResponse {
    error: ErrorResponse;
    data: Object;
}

export class ErrorResponse {
    message: string;
    code: number;
    statuscode:number;
}
