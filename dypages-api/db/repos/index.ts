import { UsersRepository } from './users';
import { RolePermitsRepository } from './role_permits';
import { LogRepository } from './log';
import { SystemRepository } from './system';
import { TableRepository } from './table';

// Database Interface Extensions:
interface IExtensions {
    users: UsersRepository,
    role_permits: RolePermitsRepository,
    log: LogRepository
    system : SystemRepository
    table: TableRepository
}

export {
    IExtensions,
    UsersRepository,
    RolePermitsRepository,
    LogRepository,
    SystemRepository,
    TableRepository
};