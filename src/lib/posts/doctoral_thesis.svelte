<svelte:head>
	<title>Doctoral Thesis</title>
</svelte:head>

<main>
	<h1>Doctoral Thesis Summary</h1>
	<h2>Optimal Representational Units for Language Modeling in Computational Phonology</h2>

	<article>
		<section>
			<h3>Research Overview</h3>
			<p>
				This thesis investigates the optimal representational units for phonological modeling by
				bridging symbolic linguistic theory and neural representation learning through
				multi-dimensional empirical and theoretical frameworks.
			</p>
			<div>
				<p><strong>Core Question:</strong></p>
				<p>
					<em>
						What are the optimal representational units for language modeling in the deep learning
						era, considering predictive accuracy, linguistic interpretability, cognitive
						plausibility, and computational efficiency?
					</em>
				</p>
			</div>
		</section>

		<section>
			<h3>Research Questions</h3>
			<table>
				<thead>
					<tr>
						<th>RQ</th>
						<th>Question</th>
						<th>Focus</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>RQ1</td>
						<td>
							How do different representational units perform across diverse phonological tasks?
						</td>
						<td>Empirical Landscape Mapping</td>
					</tr>
					<tr>
						<td>RQ2</td>
						<td>
							Can we design architectures that integrate symbolic knowledge with neural
							representations?
						</td>
						<td>Neuro-Symbolic Integration</td>
					</tr>
					<tr>
						<td>RQ3</td>
						<td>
							Do different representations align with human language acquisition and processing?
						</td>
						<td>Cognitive Plausibility Validation</td>
					</tr>
				</tbody>
			</table>
		</section>

		<section>
			<h3>Methodology</h3>
			<table>
				<thead>
					<tr>
						<th>Study</th>
						<th>Approach</th>
						<th>Key Methods</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Study 1</td>
						<td>Representational Analysis</td>
						<td>Compare SSL models, VQ methods, symbolic units across phonological tasks</td>
					</tr>
					<tr>
						<td>Study 2</td>
						<td>Hybrid Architecture Design</td>
						<td>Neural-symbolic bridges, VQ-VAE, constraint discovery networks</td>
					</tr>
					<tr>
						<td>Study 3</td>
						<td>Cognitive Validation</td>
						<td>CHILDES simulations, ABX tasks, cross-linguistic evaluation</td>
					</tr>
				</tbody>
			</table>
		</section>

		<section>
			<h3>Evaluation Framework</h3>
			<div>
				<div>
					<h4>Predictive Accuracy</h4>
					<ul>
						<li>Phoneme recognition</li>
						<li>Word segmentation</li>
						<li>Morphophonological prediction</li>
						<li>Phonotactic judgments</li>
					</ul>
				</div>
				<div>
					<h4>Linguistic Interpretability</h4>
					<ul>
						<li>Distinctive feature encoding</li>
						<li>Natural class alignment</li>
						<li>Constraint interpretability</li>
						<li>Error plausibility</li>
					</ul>
				</div>
				<div>
					<h4>Cognitive Plausibility</h4>
					<ul>
						<li>Acquisition trajectories</li>
						<li>Generalization patterns</li>
						<li>Processing constraints</li>
						<li>Behavioral alignment</li>
					</ul>
				</div>
				<div>
					<h4>Computational Efficiency</h4>
					<ul>
						<li>Training time</li>
						<li>Inference speed</li>
						<li>Memory footprint</li>
						<li>Energy consumption</li>
					</ul>
				</div>
			</div>
		</section>

		<section>
			<h3>Planned Pilot Studies</h3>
			<div>
				<div>
					<p><strong>SSL Representation Analysis</strong></p>
					<p>Layer-wise probing of wav2vec 2.0 and HuBERT for phonological feature encoding</p>
				</div>
				<div>
					<p><strong>VQ Feasibility Study</strong></p>
					<p>Testing discrete representations with varying codebook sizes for interpretability</p>
				</div>
				<div>
					<p><strong>Hybrid Architecture PoC</strong></p>
					<p>MaxEnt Harmonic Grammar with neural parameterization for phonotactic constraints</p>
				</div>
				<div>
					<p><strong>Developmental Simulation</strong></p>
					<p>CHILDES-based modeling of acquisition trajectories and milestone emergence</p>
				</div>
			</div>
		</section>

		<section>
			<h3>Expected Contributions</h3>
			<table>
				<thead>
					<tr>
						<th>Domain</th>
						<th>Impact</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Theoretical</td>
						<td>
							Unified framework mapping neural and symbolic representations; optimal granularity
							principles
						</td>
					</tr>
					<tr>
						<td>Practical</td>
						<td>
							Improved speech recognition with phonological structure; low-resource language
							applications
						</td>
					</tr>
					<tr>
						<td>Interdisciplinary</td>
						<td>
							Validation of linguistic theories; interpretable AI architectures; cognitive science
							insights
						</td>
					</tr>
					<tr>
						<td>Societal</td>
						<td>
							Language education tools; accessibility improvements; endangered language preservation
						</td>
					</tr>
				</tbody>
			</table>
		</section>

		<section>
			<h3>Key Datasets & Resources</h3>
			<div>
				<p><strong>Primary Datasets:</strong></p>
				<ul>
					<li><strong>LibriSpeech:</strong> 1000 hours English speech for phonological analysis</li>
					<li><strong>Common Voice:</strong> 38 languages for multilingual evaluation</li>
					<li><strong>TIMIT:</strong> Fine-grained phonetic analysis</li>
					<li><strong>CHILDES:</strong> Developmental trajectory modeling</li>
				</ul>
				<p><strong>Technical Infrastructure:</strong></p>
				<ul>
					<li>GPU clusters for SSL model training</li>
					<li>PyTorch, Hugging Face Transformers</li>
					<li>Docker containers for reproducibility</li>
					<li>DVC for data version control</li>
				</ul>
			</div>
		</section>

		<section>
			<h3>Significance</h3>
			<p>
				This research addresses fundamental questions at the intersection of linguistics, computer
				science, and cognitive science, establishing principled foundations for phonological
				representation in the deep learning era.
			</p>
			<div>
				<p><strong>Ultimate Goal:</strong></p>
				<p>
					Develop next-generation speech processing systems that combine neural learning power with
					linguistic interpretability and cognitive plausibility, advancing both theoretical
					understanding and practical applications across multiple domains.
				</p>
			</div>
		</section>
	</article>
</main>
