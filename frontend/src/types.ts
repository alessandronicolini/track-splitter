interface Coordinates {
    lat: number,
    lon: number
}

interface Wpt {
    ele?: number,
    name?: string,
    desc?: string,
    type?: string,
    coords: Coordinates
}

type TrkSeg = Wpt[];
type TrkSegs = TrkSeg[];

interface Trk {
    name?: string,
    desc?: string,
    type?: string,
    trkSegs: TrkSegs
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

interface Gpx {
    metadata: Metadata,
    trks: Trk[]
}