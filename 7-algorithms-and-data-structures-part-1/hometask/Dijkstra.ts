import { Edge } from "./Edge";
import { Vertex } from "./Vertex";
import { WeightedGraph, IVertexEdge } from "./WeightedGraph";

interface Path {
  path: string[];
  distance: number;
}

interface IDijkstra {
  findShortestPath(vertex1: string, vertex2: string): Path;
  findAllShortestPaths(vertex: string): Record<string, Path>;
}

type IParents = Record<string, string | null>;

export class Dijkstra implements IDijkstra {
  graph: WeightedGraph;

  constructor(g: WeightedGraph) {
    this.graph = g;
  }

  initializeDistances(vertexesNames: string[], currentVertex: string): Record<string, number> {
    return vertexesNames.reduce((acc: Record<string, number>, cur) => {
      acc[cur] = cur === currentVertex ? 0 : Infinity;
      return acc;
    }, {});
  }

  getPathFromParentsObject(parents: IParents, startVertex: string, endVertex: string): string[] {
    let currentVertex = endVertex;
    let path = [endVertex];
    if (!parents[currentVertex]) {
      return [];
    }

    while (currentVertex !== startVertex) {
      if (!parents[currentVertex]) {
        break;
      }
      currentVertex = parents[currentVertex]!;
      path.push(currentVertex);
    }
    return path.reverse();
  }

  findShortestPath(startVertex: string, endVertex: string): Path {
    const vertexesNames: string[] = this.graph.getVertexesNames();

    let currentVertex: string = startVertex;
    let currentDistance: number = 0;
    let visited: string[] = [];

    let parents: IParents = { [endVertex]: null };

    let distances: Record<string, number> = this.initializeDistances(vertexesNames, currentVertex);

    while (visited.length < vertexesNames.length) {
      let currentVertexEdges: IVertexEdge[] = this.graph.getEdges(currentVertex)!;
      let distancesFromCurrentVertex: Record<string, number> = currentVertexEdges.reduce(
        (acc: Record<string, number>, edge: IVertexEdge) => {
          if (currentDistance + edge.weight < distances[edge.to.name]) {
            parents[edge.to.name] = currentVertex;
            acc[edge.to.name] = currentDistance + edge.weight;
          }
          return acc;
        },
        {}
      );
      Object.assign(distances, distancesFromCurrentVertex);
      visited.push(currentVertex);

      if (visited.length !== vertexesNames.length) {
        const nextMinVertex = Object.keys(distances)
          .filter((key) => !visited.includes(key))
          .reduce((key, v) => (distances[v] < distances[key] ? v : key));
        currentVertex = nextMinVertex;
        currentDistance = distances[currentVertex];
      }
    }

    return {
      path: this.getPathFromParentsObject(parents, startVertex, endVertex),
      distance: distances[endVertex],
    };
  }

  findAllShortestPaths(vertex: string): Record<string, Path> {
    let vertexes: Map<string, IVertexEdge[]> = this.graph.getVertexes();

    return Array.from(vertexes.keys()).reduce((acc: Record<string, Path>, currentVertexName) => {
      if (currentVertexName !== vertex) {
        acc[currentVertexName] = this.findShortestPath(vertex, currentVertexName);
      }
      return acc;
    }, {});
  }
}
