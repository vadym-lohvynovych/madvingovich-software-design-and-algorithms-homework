import { Dijkstra } from "./Dijkstra";
import { Edge } from "./Edge";
import { Vertex } from "./Vertex";
import { WeightedGraph } from "./WeightedGraph";

/** Dijkstra Algorithm works only with directed graph. But seems like in the hometask we have not directed graph, I used mine, more complicated */

const vertex1 = new Vertex("1");
const vertex2 = new Vertex("2");
const vertex3 = new Vertex("3");
const vertex4 = new Vertex("4");
const vertex5 = new Vertex("5");
const vertex6 = new Vertex("6");

const vertices = [vertex1, vertex2, vertex3, vertex4, vertex5, vertex6];
const edges = [
  new Edge(vertex1, vertex3, 1),
  new Edge(vertex1, vertex2, 2),
  new Edge(vertex1, vertex4, 4),
  new Edge(vertex2, vertex4, 7),
  new Edge(vertex2, vertex5, 2.5),
  new Edge(vertex3, vertex4, 5),
  new Edge(vertex3, vertex5, 10),
  new Edge(vertex3, vertex6, 4),
  new Edge(vertex4, vertex6, 5),
  new Edge(vertex5, vertex6, 4),
];
const graph: WeightedGraph = new WeightedGraph();

vertices.forEach((verticle) => graph.addVertex(verticle));
edges.forEach((edge) => graph.addEdge(edge.from, edge.to, edge.weight));

const dijkstra: Dijkstra = new Dijkstra(graph);

console.log("1 6 shortest", dijkstra.findShortestPath(vertex1.name, vertex6.name));
console.log("all", dijkstra.findAllShortestPaths(vertex2.name));
