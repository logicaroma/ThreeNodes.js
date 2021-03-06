define(['jQuery', 'Underscore', 'Backbone', "order!libs/qunit-git"], function($, _, Backbone) {
  var NodeGraphTest;
  return NodeGraphTest = (function() {
    function NodeGraphTest(app) {
      module("NodeGraph");
      test("Nodegraph nodes", function() {
        var ng;
        ng = app.nodegraph;
        ng.create_node("Base", "Number", 0, 0);
        equals(ng.nodes.length, 1, "Nodegraph has 1 node");
        ng.create_node("Base", "Number", 0, 0);
        equals(ng.nodes.length, 2, "Nodegraph has 2 nodes");
        app.commandMap.execute("ClearWorkspaceCommand");
        return equals(ng.nodes.length, 0, "Nodegraph has 0 nodes");
      });
    }
    return NodeGraphTest;
  })();
});