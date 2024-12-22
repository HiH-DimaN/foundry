(function() {
    var type_impls = Object.fromEntries([["forge",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Arbitrary%3C'arbitrary%3E-for-TxKind\" class=\"impl\"><a href=\"#impl-Arbitrary%3C'arbitrary%3E-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'arbitrary&gt; Arbitrary&lt;'arbitrary&gt; for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.arbitrary\" class=\"method trait-impl\"><a href=\"#method.arbitrary\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">arbitrary</a>(u: &amp;mut Unstructured&lt;'arbitrary&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a>, Error&gt;</h4></section></summary><div class='docblock'>Generate an arbitrary value of <code>Self</code> from the given unstructured data. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.arbitrary_take_rest\" class=\"method trait-impl\"><a href=\"#method.arbitrary_take_rest\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">arbitrary_take_rest</a>(u: Unstructured&lt;'arbitrary&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a>, Error&gt;</h4></section></summary><div class='docblock'>Generate an arbitrary value of <code>Self</code> from the entirety of the given\nunstructured data. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(depth: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;)</h4></section></summary><div class='docblock'>Get a size hint for how many bytes out of an <code>Unstructured</code> this type\nneeds to construct itself. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_size_hint\" class=\"method trait-impl\"><a href=\"#method.try_size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">try_size_hint</a>(\n    depth: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;), MaxRecursionReached&gt;</h4></section></summary><div class='docblock'>Get a size hint for how many bytes out of an <code>Unstructured</code> this type\nneeds to construct itself. <a>Read more</a></div></details></div></details>","Arbitrary<'arbitrary>","forge::revm::interpreter::primitives::TransactTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Arbitrary-for-TxKind\" class=\"impl\"><a href=\"#impl-Arbitrary-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Arbitrary for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Parameters\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Parameters\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Parameters</a> = &lt;<a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a> as Arbitrary&gt;::Parameters</h4></section></summary><div class='docblock'>The type of parameters that <a href=\"trait.Arbitrary.html#tymethod.arbitrary_with\"><code>arbitrary_with</code></a> accepts for configuration\nof the generated <a href=\"../strategy/trait.Strategy.html\"><code>Strategy</code></a>. Parameters must implement <a href=\"https://doc.rust-lang.org/nightly/std/default/trait.Default.html\"><code>Default</code></a>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Strategy\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Strategy\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Strategy</a> = TupleUnion&lt;((<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.fn.html\">fn</a>() -&gt; <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a>&gt;), (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Map&lt;&lt;<a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a> as Arbitrary&gt;::Strategy, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.fn.html\">fn</a>(_: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>) -&gt; <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a>&gt;&gt;))&gt;</h4></section></summary><div class='docblock'>The type of <a href=\"../strategy/trait.Strategy.html\"><code>Strategy</code></a> used to generate values of type <code>Self</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.arbitrary_with\" class=\"method trait-impl\"><a href=\"#method.arbitrary_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">arbitrary_with</a>(\n    _top: &lt;<a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a> as Arbitrary&gt;::Parameters,\n) -&gt; &lt;<a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a> as Arbitrary&gt;::Strategy</h4></section></summary><div class='docblock'>Generates a <a href=\"../strategy/trait.Strategy.html\"><code>Strategy</code></a> for producing arbitrary values of type the\nimplementing type (<code>Self</code>). The strategy is passed the arguments given\nin args. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.arbitrary\" class=\"method trait-impl\"><a href=\"#method.arbitrary\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">arbitrary</a>() -&gt; Self::Strategy</h4></section></summary><div class='docblock'>Generates a <a href=\"../strategy/trait.Strategy.html\"><code>Strategy</code></a> for producing arbitrary values\nof type the implementing type (<code>Self</code>). <a>Read more</a></div></details></div></details>","Arbitrary","forge::revm::interpreter::primitives::TransactTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-TxKind\" class=\"impl\"><a href=\"#impl-Clone-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","forge::revm::interpreter::primitives::TransactTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TxKind\" class=\"impl\"><a href=\"#impl-Debug-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","forge::revm::interpreter::primitives::TransactTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable-for-TxKind\" class=\"impl\"><a href=\"#impl-Decodable-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Decodable for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>rlp</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>(buf: &amp;mut &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a>, Error&gt;</h4></section></summary><div class='docblock'>Decodes the blob into the appropriate type. <code>buf</code> must be advanced past\nthe decoded object.</div></details></div></details>","Decodable","forge::revm::interpreter::primitives::TransactTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-TxKind\" class=\"impl\"><a href=\"#impl-Default-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","forge::revm::interpreter::primitives::TransactTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-TxKind\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.216/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>serde</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.216/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(\n    deserializer: D,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a>, &lt;D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.216/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.216/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.216/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.216/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","forge::revm::interpreter::primitives::TransactTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encodable-for-TxKind\" class=\"impl\"><a href=\"#impl-Encodable-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Encodable for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>rlp</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self, out: &amp;mut dyn BufMut)</h4></section></summary><div class='docblock'>Encodes the type into the <code>out</code> buffer.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.length\" class=\"method trait-impl\"><a href=\"#method.length\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">length</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the length of the encoding of this type in bytes. <a>Read more</a></div></details></div></details>","Encodable","forge::revm::interpreter::primitives::TransactTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CAddress%3E-for-TxKind\" class=\"impl\"><a href=\"#impl-From%3CAddress%3E-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>&gt; for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>) -&gt; <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h4></section></summary><div class=\"docblock\"><p>Creates a <code>TxKind::Call</code> with the given address.</p>\n</div></details></div></details>","From<Address>","forge::revm::interpreter::primitives::TransactTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3COption%3CAddress%3E%3E-for-TxKind\" class=\"impl\"><a href=\"#impl-From%3COption%3CAddress%3E%3E-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>&gt;&gt; for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>&gt;) -&gt; <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h4></section></summary><div class=\"docblock\"><p>Creates a <code>TxKind::Call</code> with the <code>Some</code> address, <code>None</code> otherwise.</p>\n</div></details></div></details>","From<Option<Address>>","forge::revm::interpreter::primitives::TransactTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-TxKind\" class=\"impl\"><a href=\"#impl-Hash-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#235-237\">Source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;[Self], state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","forge::revm::interpreter::primitives::TransactTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-TxKind\" class=\"impl\"><a href=\"#impl-PartialEq-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#261\">Source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","forge::revm::interpreter::primitives::TransactTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-TxKind\" class=\"impl\"><a href=\"#impl-Serialize-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.216/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>serde</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.216/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(\n    &amp;self,\n    serializer: S,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.216/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.216/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.216/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.216/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.216/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.216/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","forge::revm::interpreter::primitives::TransactTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TxKind\" class=\"impl\"><a href=\"#impl-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to\" class=\"method\"><h4 class=\"code-header\">pub const fn <a href=\"forge/revm/interpreter/primitives/enum.TxKind.html#tymethod.to\" class=\"fn\">to</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the address of the contract that will be called or will receive the transfer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_create\" class=\"method\"><h4 class=\"code-header\">pub const fn <a href=\"forge/revm/interpreter/primitives/enum.TxKind.html#tymethod.is_create\" class=\"fn\">is_create</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns true if the transaction is a contract creation.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_call\" class=\"method\"><h4 class=\"code-header\">pub const fn <a href=\"forge/revm/interpreter/primitives/enum.TxKind.html#tymethod.is_call\" class=\"fn\">is_call</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns true if the transaction is a contract call.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method\"><h4 class=\"code-header\">pub const fn <a href=\"forge/revm/interpreter/primitives/enum.TxKind.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Calculates a heuristic for the in-memory size of this object.</p>\n</div></details></div></details>",0,"forge::revm::interpreter::primitives::TransactTo"],["<section id=\"impl-Copy-for-TxKind\" class=\"impl\"><a href=\"#impl-Copy-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3></section>","Copy","forge::revm::interpreter::primitives::TransactTo"],["<section id=\"impl-Eq-for-TxKind\" class=\"impl\"><a href=\"#impl-Eq-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3></section>","Eq","forge::revm::interpreter::primitives::TransactTo"],["<section id=\"impl-StructuralPartialEq-for-TxKind\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-TxKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.TxKind.html\" title=\"enum forge::revm::interpreter::primitives::TxKind\">TxKind</a></h3></section>","StructuralPartialEq","forge::revm::interpreter::primitives::TransactTo"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[33993]}