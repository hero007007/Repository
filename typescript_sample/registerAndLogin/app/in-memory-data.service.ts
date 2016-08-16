/**
 * Created by jlch on 16/8/8.
 */


// 在这个演示项目中,把默认的 XHRBackend 服务（该服务负责与远端服务器对话）替换成了 内存 Web API 服务
export class InMemoryDataService {
    createDb() {
        let heroes = [
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'Narco'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Celeritas'},
            {id: 15, name: 'Magneta'},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'}
        ];
        return {heroes};
    }
}
