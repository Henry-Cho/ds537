graph = {
    'Park City': {'Snyderville': 8, 'Oakley': 40, 'Francis': 36},
    'Snyderville': {'Park City': 8, 'Kamas': 13, 'Coalville': 32},
    'Kamas': {'Coalville': 16, 'Snyderville': 13, 'Oakley': 22},
    'Francis': {'Oakley': 12, 'Park City': 36},
    'Coalville': {'Snyderville': 32, 'Kamas': 16},
    'Oakley': {'Kamas': 22, 'Park City': 40, 'Francis': 12},
}

def dijkstra(graph, start):
    unvisited_nodes = list(graph.keys())
    shortest_path = {}
    previous_nodes = {}
    max_value = float('inf')
    for node in unvisited_nodes:
        shortest_path[node] = max_value
    shortest_path[start] = 0

    while unvisited_nodes:
        current_min_node = None

        for node in unvisited_nodes:
            if current_min_node == None:
                current_min_node = node
            elif shortest_path[node] < shortest_path[current_min_node]:
                current_min_node = node

        neighbors = graph[current_min_node]

        for neighbor, weight in neighbors.items():
            tentative_value = shortest_path[current_min_node] + weight
            if tentative_value < shortest_path[neighbor]:
                shortest_path[neighbor] = tentative_value
                previous_nodes[neighbor] = current_min_node

        unvisited_nodes.remove(current_min_node)

    return shortest_path

shortest_times = dijkstra(graph, 'Park City')
print("Henry Cho")
print(shortest_times)