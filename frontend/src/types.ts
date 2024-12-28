import { LatLngLiteral } from "leaflet";


interface Wpt {
    name?: string,
    desc?: string,
    type?: string,
    latLng: LatLngLiteral
}

type TrkSeg = Wpt[];

interface Trk {
    name?: string,
    desc?: string,
    type?: string,
    trkSegs: TrkSeg[];
}

interface Person {
    name: string,
    email: string,
    link: string
}

interface Metadata {
    name: string,
    desc: string,
    link: string,
    author: Person,
    time: Date
}

export interface Gpx {
    metadata: Metadata,
    trks: Trk[]
}