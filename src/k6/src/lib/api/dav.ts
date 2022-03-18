import { RefinedResponse, ResponseType } from 'k6/http';

import * as types from '../types';
import * as api from './api';

export class Upload {
    public static exec({
        credential,
        userName,
        path = '',
        asset,
        tags,
    }: {
        credential: types.Credential;
        userName: string;
        asset: types.Asset;
        path?: string;
        tags?: types.Tags;
    }): RefinedResponse<ResponseType> {
        return api.request({
            method: 'PUT',
            credential,
            path: `/plus/remote.php/webdav/${path}/${asset.name}`,
            params: { tags },
            body: asset.bytes,
        });
    }
}

export class Download {
    public static exec({
        credential,
        userName,
        path,
        tags,
    }: {
        credential: types.Credential;
        userName: string;
        path: string;
        tags?: types.Tags;
    }): RefinedResponse<ResponseType> {
        return api.request({
            method: 'GET',
            credential,
            path: `/plus/remote.php/webdav/${path}`,
            params: { tags },
        });
    }
}

export class Delete {
    public static exec({
        credential,
        userName,
        path,
        tags,
    }: {
        credential: types.Credential;
        userName: string;
        path: string;
        tags?: types.Tags;
    }): RefinedResponse<ResponseType> {
        return api.request({
            method: 'DELETE',
            credential,
            path: `/plus/remote.php/webdav/${path}`,
            params: { tags },
        });
    }
}

export class Create {
    public static exec({
        credential,
        userName,
        path,
        tags,
    }: {
        credential: types.Credential;
        userName: string;
        path: string;
        tags?: types.Tags;
    }): RefinedResponse<ResponseType> {
        return api.request({
            method: 'MKCOL',
            credential,
            path: `/plus/remote.php/webdav/${path}`,
            params: { tags },
            body: null,
        });
    }
}

export class Propfind {
    public static exec({
        credential,
        userName,
        path = '',
        tags,
    }: {
        credential: types.Credential;
        userName: string;
        path?: string;
        tags?: types.Tags;
    }): RefinedResponse<ResponseType> {
        return api.request({
            method: 'PROPFIND',
            credential,
            path: `/plus/remote.php/webdav/${path}`,
            params: { tags },
        });
    }
}

export class Move {
    public static exec({
        credential,
        userName,
        path,
        destination,
        tags,
    }: {
        credential: types.Credential;
        userName: string;
        path: string;
        destination: string;
        tags?: types.Tags;
    }): RefinedResponse<ResponseType> {
        return api.request({
            method: 'MOVE',
            credential,
            path: `/plus/remote.php/webdav/${path}`,
            params: { tags },
            headers: {
                destination: `/plus/remote.php/webdav/${destination}`,
            },
        });
    }
}
export class Trash {
    public static exec({
        credential,
        userName,
        fileid = '',
        tags,
    }: {
        credential: types.Credential;
        userName: string;
        fileid?: string;
        tags?: types.Tags;
    }): RefinedResponse<ResponseType> {
        return api.request({
            method: 'DELETE',
            credential,
            path: `/plus/remote.php/dav/trash-bin/${fileid}`,
            params: { tags },
        });
    }
}

export class Restore {
    public static exec({
        credential,
        userName,
        fileid = '',
        path = '',
        tags,
    }: {
        credential: types.Credential;
        userName: string;
        fileid?: string;
        path?: string;
        tags?: types.Tags;
    }): RefinedResponse<ResponseType> {
        return api.request({
            method: 'MOVE',
            credential,
            path: `/plus/remote.php/dav/trash-bin/${fileid}`,
            params: { tags },
            headers: {
                destination: `/plus/remote.php/webdav/${path}`,
                overwrite: 'F',
            },
        });
    }
}
