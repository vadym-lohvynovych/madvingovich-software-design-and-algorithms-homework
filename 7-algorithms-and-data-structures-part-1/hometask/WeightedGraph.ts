import { Edge } from "./Edge";
import { Vertex } from "./Vertex";

interface IWeightedGraph {
  addVertex(vertex: Vertex): void;
  addEdge(vertex1: Vertex, vertex2: Vertex, weight: number): void;
}

export interface IVertexEdge {
  to: Vertex;
  weight: number;
}

export class WeightedGraph implements IWeightedGraph {
  private vertexes: Map<string, IVertexEdge[]> = new Map();

  addVertex(vertex: Vertex) {
    this.vertexes.set(vertex.name, []);
  }

  addEdge(vertex1: Vertex, vertex2: Vertex, weight: number) {
    this.getEdges(vertex1.name)?.push({ to: vertex2, weight });
  }

  getEdges(vertexName: string): IVertexEdge[] | null {
    return this.vertexes.get(vertexName) || null;
  }

  getVertexes(): Map<string, IVertexEdge[]> {
    return this.vertexes;
  }

  getVertexesNames(): string[] {
    return Array.from(this.getVertexes().entries()).map((e) => e[0]);
  }
}
