Search.setIndex({"docnames": ["01-intro", "02-frame", "03-approach", "04-bellman", "05-bellman-optimal", "06-dynamic", "07-monte-carlo-td", "08-q-learning", "09-deep-q-learning", "10-dqn-torch", "11-policy", "12-actor-critic", "13-trpo", "14-gae", "15-ppo", "16-ppo-torch", "17-ppo-trl"], "filenames": ["01-intro.ipynb", "02-frame.ipynb", "03-approach.ipynb", "04-bellman.ipynb", "05-bellman-optimal.ipynb", "06-dynamic.ipynb", "07-monte-carlo-td.ipynb", "08-q-learning.ipynb", "09-deep-q-learning.ipynb", "10-dqn-torch.ipynb", "11-policy.ipynb", "12-actor-critic.ipynb", "13-trpo.ipynb", "14-gae.ipynb", "15-ppo.ipynb", "16-ppo-torch.ipynb", "17-ppo-trl.ipynb"], "titles": ["What is Reinforcement Learning?", "The Reinforcement Learning Framework", "Two main approaches for solving RL problems", "The Bellman Equation", "The Bellman Optimality Equation", "Dynamic Programming", "Monte Carlo vs Temporal Difference Learning", "Q-learning", "Deep Q-Learning", "Deep Q-Learning with Pytorch", "Policy Gradient", "Actor-Critic Methods", "TRPO", "Generalized Advantage Estimation", "Proximal Policy Optimization", "PPO with CleanRL", "PPO with TRL"], "terms": {"To": [0, 1, 8, 10, 11, 12, 14, 16], "understand": [0, 1, 5, 11, 14], "let": [0, 1, 4, 5, 8, 11, 12, 14], "s": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14], "start": [0, 1, 2, 3, 4, 9, 10, 11], "idea": [0, 5, 6, 7, 8, 10, 11, 14], "behind": [0, 5, 11], "an": [0, 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "agent": [0, 1, 6, 7, 8, 9, 10, 11, 14], "ai": 0, "from": [0, 1, 3, 8, 9, 10, 11, 12, 14, 15, 16], "environ": [0, 1, 5, 6, 8, 9, 10, 11, 15], "interact": [0, 6, 7, 8], "through": [0, 1, 5, 11], "trial": 0, "error": [0, 8, 9, 10, 11, 14, 16], "receiv": [0, 1, 6], "reward": [0, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "neg": 0, "posit": [0, 1, 8], "feedback": [0, 11, 16], "perform": [0, 7, 8, 9, 10, 11, 12], "action": [0, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15], "come": [0, 1, 2, 10, 14, 16], "our": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16], "natur": [0, 10], "experi": [0, 6, 7], "For": [0, 2, 4, 5, 10], "instanc": [0, 10], "imagin": [0, 1, 11], "put": 0, "your": [0, 8, 11, 16], "littl": 0, "brother": 0, "front": 0, "video": [0, 1, 11], "game": [0, 1, 11], "he": 0, "never": 0, "plai": [0, 1, 4, 6, 11], "give": [0, 1, 4, 8, 12, 14], "him": 0, "control": [0, 9, 11, 16], "leav": 0, "alon": 0, "press": 0, "right": [0, 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 16], "button": 0, "got": 0, "coin": 0, "1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "It": [0, 1, 4, 5, 6, 8, 9, 10, 11, 12], "just": [0, 1, 5, 13], "understood": 0, "thi": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 16], "must": [0, 4, 5, 7, 13], "get": [0, 1, 2, 7, 8, 9, 10, 11, 16], "But": [0, 1, 6, 7, 10], "again": [0, 1, 5], "touch": 0, "enemi": 0, "di": 0, "so": [0, 1, 2, 3, 5, 6, 7, 9, 10, 11, 14], "By": [0, 6, 7, 8, 9, 14], "hi": 0, "need": [0, 2, 3, 7, 9, 10, 11, 14, 16], "avoid": [0, 8, 14], "without": [0, 5, 10, 11, 14, 16], "ani": [0, 3, 4, 5, 7, 10, 12, 16], "supervis": 0, "child": 0, "better": [0, 1, 5, 6, 7, 8, 10, 11], "That": 0, "how": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14], "human": [0, 16], "anim": 0, "comput": [0, 5, 7, 8, 9, 10, 11, 12, 14, 15], "approach": [0, 8], "we": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16], "can": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 16], "now": [0, 1, 2, 4, 10, 11, 12, 16], "make": [0, 1, 5, 7, 8, 9, 10, 11, 12, 15, 16], "framework": [0, 2], "solv": [0, 6, 7, 10, 11, 12], "task": [0, 7], "also": [0, 3, 8, 9, 10, 11, 12, 16], "call": [0, 4, 5, 6, 7, 9, 10, 14], "decis": [0, 1, 5, 12], "problem": [0, 6, 8, 10, 12, 13, 14], "build": [0, 2], "uniqu": [0, 4], "doe": [0, 4, 7, 10, 12, 13], "work": [0, 3, 11, 14], "platform": 1, "s_": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "0": [1, 2, 4, 5, 9, 10, 11, 12, 13, 14, 15, 16], "first": [1, 5, 9, 12, 13, 16], "frame": 1, "base": [1, 9, 10, 11, 14, 16], "take": [1, 2, 5, 8, 9, 10, 11, 12, 14], "a_": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "move": [1, 8, 9], "goe": [1, 7, 10], "new": [1, 5, 8, 9, 11, 12, 14], "some": [1, 4, 5, 10, 11, 12, 13, 16], "r_": [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14], "re": [1, 8, 9, 10, 11], "dead": 1, "loop": 1, "output": [1, 2, 8, 9, 10, 11, 16], "sequenc": [1, 4, 5, 8, 12, 16], "next": [1, 6, 7, 8, 9, 11, 12], "rightarrow": 1, "why": [1, 4, 16], "goal": [1, 2, 4, 8], "maxim": [1, 2, 4, 7, 10, 12, 14], "expect": [1, 2, 3, 4, 9, 10, 11, 12], "becaus": [1, 5, 6, 8, 10, 11, 14], "which": [1, 2, 4, 5, 8, 9, 10, 11, 12, 13, 14, 16], "all": [1, 2, 4, 5, 9, 10, 11, 12, 13, 16], "describ": [1, 9, 10, 12], "cumul": [1, 2, 10, 11], "ar": [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16], "inform": [1, 8], "In": [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 14, 16], "case": [1, 2, 4, 5, 9, 14], "screenshot": 1, "trade": [1, 7], "valu": [1, 7, 8, 9, 10, 11, 12, 13, 14, 15], "certain": 1, "stock": 1, "etc": [1, 16], "There": [1, 2, 10, 13], "differenti": [1, 10, 12], "between": [1, 4, 8, 9, 12, 14, 16], "howev": [1, 2, 8, 10, 11, 12, 14], "complet": [1, 4, 5, 6, 8, 9, 16], "descript": 1, "world": 1, "hidden": 1, "fulli": 1, "chess": 1, "have": [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14], "access": 1, "whole": 1, "board": 1, "other": [1, 2, 6, 7, 11], "word": [1, 2], "o": 1, "partial": [1, 4], "super": [1, 9, 10, 11, 15], "mario": 1, "bro": 1, "onli": [1, 5, 6, 7, 10, 11, 15], "see": [1, 2, 4, 10, 11, 14], "part": [1, 6], "level": [1, 16], "close": [1, 12], "player": 1, "cours": [1, 10], "us": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "term": [1, 3, 5, 7, 10, 12], "denot": [1, 2, 5, 12, 14], "both": [1, 4, 5, 6, 8, 10, 11, 13], "distinct": 1, "implement": [1, 8, 9, 10, 11], "set": [1, 9, 12, 14, 16], "possibl": [1, 2, 8, 10, 11, 12, 13], "discret": [1, 15], "continu": [1, 10], "number": [1, 9, 10, 11, 12, 13, 15], "finit": [1, 12], "sinc": [1, 4, 7, 10, 11, 14], "4": [1, 5, 7, 9, 10, 11, 12, 15], "direct": [1, 10, 11], "infinit": [1, 10, 11, 12], "A": [1, 2, 3, 4, 10, 11, 12, 13, 14, 16], "self": [1, 9, 10, 11, 15, 16], "drive": 1, "car": 1, "ha": [1, 4, 5, 8, 9, 10, 12], "turn": [1, 5, 10], "left": [1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 16], "20": [1, 10, 11], "21": 1, "2": [1, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15], "function": [1, 4, 5, 6, 7, 8, 9, 10, 11, 12], "r": [1, 3, 4, 5, 10, 11, 12, 14, 16], "critic": [1, 14, 15], "import": [1, 5, 9, 10, 11, 12, 15, 16], "depend": [1, 7, 8, 10, 12], "current": [1, 2, 7, 8, 9, 10, 11, 12, 14], "taken": [1, 9, 10, 11, 14], "t": [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16], "although": 1, "frequent": [1, 10], "simplifi": [1, 3], "s_t": [1, 7, 8, 9, 10, 11, 12, 13, 15, 16], "pair": [1, 2, 3, 5, 7, 8, 9, 11, 16], "a_t": [1, 7, 10, 12, 13, 15, 16], "notion": [1, 13], "over": [1, 5, 9, 10, 11, 12, 16], "trajectori": [1, 10, 11, 12, 13, 14], "actual": [1, 8], "mean": [1, 9, 10, 11, 14, 15], "few": [1, 8, 16], "thing": 1, "ll": [1, 6, 7, 9, 10, 11, 14], "notat": 1, "tau": [1, 9, 10, 11, 14], "either": [1, 9, 14], "clear": [1, 4], "context": 1, "won": 1, "matter": 1, "same": [1, 5, 7, 8, 10, 11], "equat": [1, 2, 5, 7, 12], "appli": [1, 4], "One": [1, 5, 12], "kind": 1, "horizon": [1, 12], "undiscount": [1, 13], "sum": [1, 2, 4, 10, 11, 12, 16], "obtain": [1, 4, 5, 9, 10, 11, 12, 13, 16], "fix": [1, 5, 11], "window": 1, "step": [1, 2, 5, 7, 8, 10, 11, 12, 14, 15, 16], "sum_": [1, 2, 3, 4, 5, 10, 11, 12, 13, 14], "r_t": [1, 15], "anoth": [1, 5, 12], "discount": [1, 3, 4, 6, 7, 9, 11, 12, 13], "ever": [1, 10], "far": [1, 3, 5, 9, 10, 14, 16], "off": 1, "futur": 1, "thei": [1, 5, 7, 10, 12], "formul": [1, 10, 13], "includ": [1, 7, 16], "factor": [1, 9, 12, 13], "gamma": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16], "infti": [1, 2, 4, 5, 12, 13], "would": [1, 5, 9, 12, 14], "want": [1, 2, 8, 10, 11], "though": [1, 13], "don": [1, 6, 8, 11, 16], "do": [1, 2, 7, 8, 10, 12, 14], "intuit": [1, 10], "appeal": 1, "mathemat": 1, "conveni": 1, "On": [1, 4, 6, 10, 11], "cash": 1, "than": [1, 5, 8, 9, 10, 12, 14], "later": [1, 9], "mai": [1, 2, 5, 10, 13], "converg": [1, 5, 7, 10, 12], "hard": 1, "deal": 1, "under": [1, 2], "reason": [1, 5], "condit": [1, 10], "ve": [1, 9], "discuss": 1, "wai": [1, 5, 10, 11, 12, 14], "you": [1, 3, 8, 9, 11, 16], "try": [1, 7, 8, 11], "go": [1, 9, 10, 14], "dig": 1, "literatur": [1, 5], "like": [1, 2, 3, 5, 8, 9, 10, 14], "run": [1, 6, 10, 11, 14, 15, 16], "standard": 1, "markov": [1, 5, 12], "mdp": [1, 5, 12, 13], "5": [1, 2, 15], "tupl": [1, 8, 9, 11, 12], "langl": 1, "p": [1, 3, 4, 5, 10, 12], "rho_0": [1, 12], "rangl": 1, "where": [1, 2, 4, 5, 9, 10, 11, 12, 13, 14], "valid": [1, 10], "time": [1, 2, 7, 8, 10, 11, 12, 15], "mathbb": [1, 2, 3, 4, 5, 7, 10, 12, 13, 14, 16], "mathcal": [1, 3, 4, 5, 8, 12, 14], "transit": [1, 8, 9, 12], "probabl": [1, 5, 7, 8, 10, 11, 12, 14, 16], "being": [1, 9, 11], "distribut": [1, 10, 11, 12, 15, 16], "name": [1, 9], "refer": [1, 5, 16], "fact": [1, 5], "system": [1, 5], "obei": 1, "properti": [1, 10], "most": [1, 5, 7, 10], "recent": [1, 9, 10], "prior": 1, "histori": 1, "learn": [2, 3, 4, 5, 10, 11, 14], "select": [2, 4, 7, 8, 9, 10, 11, 14], "its": [2, 4, 5, 6, 7, 10, 11, 12, 14], "tell": [2, 10], "what": [2, 3, 4, 7, 8, 10, 11, 14, 16], "given": [2, 5, 6, 7, 8, 10, 11, 14], "defin": [2, 4, 9, 10, 12, 16], "behavior": [2, 7], "find": [2, 5, 7, 9, 10, 11], "optim": [2, 5, 7, 8, 9, 10, 11, 13, 15], "ast": [2, 4, 5, 10], "return": [2, 3, 4, 8, 9, 10, 11, 12, 15, 16], "when": [2, 5, 7, 8, 9, 13], "act": [2, 9, 10, 11], "accord": [2, 9, 10], "train": [2, 6, 7, 8, 10, 11, 14], "directli": [2, 7, 8, 10, 11, 12, 14, 16], "teach": 2, "indirectli": 2, "more": [2, 6, 7, 8, 9, 10, 14], "valuabl": 2, "lead": [2, 4, 8, 10, 11, 14], "determinist": [2, 4, 5], "usual": [2, 10, 14], "mu": [2, 10], "stochast": [2, 5, 7, 10, 11, 12], "sim": [2, 10, 12, 14, 16], "cdot": [2, 4, 12], "instead": [2, 3, 6, 8, 10, 11, 12], "write": 2, "v_": [2, 3, 4, 5, 10, 12, 13, 14, 15, 16], "e": [2, 3, 4, 5, 7, 10, 12, 13, 14, 16], "_": [2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 16], "g_": [2, 6], "k": [2, 5, 10, 14], "each": [2, 3, 5, 8, 9, 10, 11, 14, 15, 16], "follow": [2, 3, 4, 10, 12, 13, 16], "forev": [2, 3], "afterward": 2, "here": [2, 9, 14], "thank": [2, 11], "biggest": 2, "7": 2, "6": [2, 10], "attain": 2, "after": [2, 3, 5, 7, 9, 10, 16], "q_": [2, 3, 4, 5, 8, 12, 13], "whichev": 2, "choos": [2, 5, 7, 9], "calcul": [2, 3, 6, 8, 10, 11, 16], "computation": [2, 10], "expens": [2, 5, 10], "process": [2, 5, 7, 12, 14, 16], "bellman": [2, 5, 7], "help": [2, 5, 8, 10, 11], "pi": [3, 4, 5, 7, 10, 12, 13, 14, 16], "With": [3, 7, 8, 10, 14, 16], "know": [3, 5, 8, 10, 11], "polici": [3, 6, 9, 11, 13, 15], "dynam": 3, "program": 3, "veri": [3, 7, 9, 11, 12], "similar": 3, "recurs": 3, "begin": [3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 16], "consid": [3, 4, 5, 12], "immedi": [3, 7, 10], "express": [3, 7, 10, 12, 13], "ultim": 4, "reinforc": [4, 5, 7, 14], "seek": [4, 12], "therefor": [4, 5, 8, 14], "necessari": 4, "order": [4, 12], "pi_": [4, 5, 10, 11, 12, 13, 14, 16], "ge": [4, 5, 12, 14], "leftrightarrow": 4, "pi_1": 4, "pi_2": 4, "quad": [4, 8, 9, 12, 14], "foral": 4, "compar": [4, 7, 8, 11], "state": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "v": [4, 6, 9, 10, 11, 15, 16], "max_": [4, 5, 7, 8, 9, 10, 12, 14], "whose": 4, "maximum": [4, 8, 10], "out": [4, 10], "simultan": 4, "show": [4, 9, 10, 12], "one": [4, 5, 6, 7, 8, 10, 11, 12, 13, 14], "achiev": [4, 5], "definit": [4, 9, 13], "mani": [4, 11, 16], "question": 4, "exist": [4, 6, 7, 8], "Is": 4, "algorithm": [4, 5, 11, 12], "underset": [4, 10, 12, 14], "max": [4, 9, 12, 15, 16], "matrix": 4, "p_": [4, 10, 12], "f": [4, 9, 10, 11], "unknown": [4, 5], "variabl": [4, 10, 14], "x": [4, 9, 10, 11, 15, 16], "d": [4, 8, 12, 14], "metric": [4, 16], "space": [4, 8, 9, 10, 11, 12, 15], "Then": [4, 5, 9, 10, 12, 13], "q": [4, 6, 10, 11, 12, 15, 16], "tx": 4, "ty": 4, "le": [4, 5, 9, 12], "qd": 4, "y": [4, 16], "non": [4, 8, 9, 14], "empti": 4, "admit": 4, "i": [4, 5, 8, 10, 11, 12, 14, 16], "furthermor": 4, "found": [4, 9], "arbitrari": [4, 5], "element": [4, 9], "x_": 4, "n": [4, 8, 9, 12, 15], "lim_": 4, "proof": [4, 5, 10], "omit": 4, "particular": 4, "hold": [4, 9, 12], "rate": [4, 9, 16], "norm": 4, "absolut": [4, 9], "vector": [4, 12, 15], "two": [4, 6, 7, 8, 9, 10, 11, 13, 14, 16], "suppos": [4, 5, 10, 13], "arg": [4, 5, 8, 9, 10, 12, 14], "split": [4, 16], "end": [4, 5, 8, 9, 10, 12, 14, 15, 16], "elementwis": 4, "comparison": 4, "As": [4, 9, 14, 16], "result": [4, 9, 10, 11, 16], "similarli": 4, "shown": [4, 5], "z": 4, "hand": [4, 6, 11], "z_": 4, "th": 4, "entri": 4, "row": [4, 9], "nonneg": [4, 12], "equal": [4, 12], "alwai": [4, 9, 10], "solut": [4, 5, 8, 10, 11], "onc": [4, 5, 9], "been": [4, 5, 9], "easili": 4, "repeat": 4, "abov": [4, 12, 16], "inequ": [4, 5], "dot": [4, 5, 10, 11, 12, 16], "studi": [4, 10, 11, 14], "correspond": [4, 13, 14], "easi": [4, 5, 14], "relat": [4, 13], "text": [4, 7, 9, 12, 14, 16], "greedi": [4, 5, 7], "otherwis": [4, 7, 8, 9, 10], "while": [4, 7, 8, 10, 11, 12, 14, 16], "align": [4, 5, 10, 12, 16], "greatest": 4, "The": [5, 6, 9, 12, 13, 16], "dp": 5, "collect": [5, 9, 10, 11, 12, 14, 16], "perfect": 5, "model": [5, 9], "classic": 5, "limit": 5, "util": [5, 10, 15], "assumpt": 5, "great": 5, "still": [5, 14], "theoret": 5, "provid": [5, 11, 12], "essenti": [5, 9], "foundat": 5, "method": [5, 8, 9, 13, 14, 16], "present": 5, "rest": [5, 10], "book": 5, "view": [5, 9, 15], "attempt": 5, "much": [5, 10, 14], "effect": [5, 10, 13], "less": [5, 7, 14], "assum": [5, 12], "recal": [5, 7, 10], "If": [5, 8, 10, 11, 12, 14, 16], "known": [5, 13], "linear": [5, 8, 9, 10, 11, 15], "principl": 5, "straightforward": 5, "purpos": 5, "suitabl": 5, "initi": [5, 7, 8, 9, 12, 14], "approxim": [5, 7, 8, 10, 11, 12], "chosen": 5, "arbitrarili": [5, 10], "success": 5, "clearli": 5, "point": [5, 12], "updat": [5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "rule": [5, 16], "inde": 5, "gener": [5, 7, 8, 10, 12, 16], "determin": [5, 9], "whether": 5, "should": [5, 10, 16], "chang": [5, 8, 10, 14], "ne": 5, "good": [5, 10, 11], "keep": 5, "expand": [5, 12], "side": [5, 10], "reappli": 5, "3": [5, 7, 15], "vdot": 5, "origin": 5, "respect": [5, 8], "old": [5, 12, 14], "satisfi": [5, 12], "special": [5, 7, 12], "specifi": 5, "carri": 5, "yield": [5, 13, 16], "even": 5, "thu": [5, 12], "monoton": 5, "overset": [5, 7], "longrightarrow": [5, 7], "guarante": 5, "strict": 5, "previou": [5, 8, 9, 10, 12, 13, 14], "unless": 5, "alreadi": 5, "drawback": 5, "involv": [5, 7, 10], "itself": 5, "truncat": [5, 9, 15], "sever": [5, 13], "lose": 5, "stop": 5, "written": [5, 13], "particularli": 5, "simpl": [5, 8, 16], "oper": [5, 10], "combin": [5, 7, 8, 9, 10, 11, 14, 16], "note": [5, 12, 16], "simpli": 5, "rememb": [6, 7, 8, 14], "rl": [6, 16], "strategi": [6, 7], "them": [6, 9, 10, 16], "entir": 6, "befor": [6, 10, 13], "explain": [6, 16], "exampl": [6, 16], "wait": [6, 9], "until": [6, 12], "target": [6, 7, 9, 11], "requir": [6, 7, 10, 11, 13, 16], "form": [6, 13], "td": [6, 7, 8, 11, 13, 16], "didn": 6, "estim": [6, 7, 8, 9, 10, 11, 14, 16], "ad": [6, 9], "bootstrap": [6, 8], "sampl": [6, 7, 8, 9, 10, 11, 13, 15], "longleftarrow": 6, "alpha": [6, 10, 12, 16], "sarsa": [6, 7], "improv": [7, 13, 14], "contrast": 7, "tabl": [7, 8], "epsilon": [7, 8, 9, 12, 14, 16], "handl": 7, "explor": [7, 8], "exploit": 7, "highest": [7, 8], "random": [7, 8, 9, 10, 15, 16], "At": [7, 8, 9, 11, 16], "huge": 7, "high": [7, 10, 11, 14, 16], "consequ": [7, 8, 9, 10, 11, 14], "progress": 7, "reduc": [7, 8, 10, 13, 16], "produc": [7, 11], "plu": 7, "constantli": 7, "differ": [7, 8, 9, 10, 11, 12, 13, 14, 16], "everi": [7, 8, 9, 11, 12], "iter": [7, 12], "illustr": 7, "below": [7, 9], "enviro": [7, 14], "tabular": 8, "becom": 8, "small": [8, 9, 10, 12, 14], "enough": 8, "repres": [8, 9, 13], "effici": [8, 11, 16], "arrai": [8, 9, 10, 11, 15], "gigant": 8, "best": [8, 9], "parametr": 8, "theta": [8, 10, 11, 12, 13, 14, 16], "neural": [8, 9, 10, 13], "network": [8, 13, 15], "done": [8, 9, 10, 11, 15, 16], "creat": [8, 11], "loss": [8, 9, 11, 12, 15], "predict": [8, 10], "gradient": [8, 9, 11, 13, 14], "descent": [8, 10], "weight": [8, 9, 10, 15], "memori": 8, "capac": [8, 9], "episod": [8, 9], "m": [8, 10, 11], "initialis": 8, "s_1": [8, 12], "execut": [8, 9], "emul": 8, "observ": [8, 9, 11], "store": [8, 9, 16], "minibatch": [8, 14], "y_": [8, 16], "y_i": 8, "c": [8, 12], "reset": [8, 9, 10, 11, 15], "phase": 8, "batch": [8, 9, 11, 15, 16], "randomli": [8, 11], "might": [8, 10], "suffer": 8, "instabl": 8, "mainli": 8, "stabil": [8, 9, 11, 14], "dure": [8, 9, 16], "buffer": [8, 9, 11], "save": [8, 9, 10, 11, 16], "reus": 8, "allow": [8, 10, 12, 13, 14], "multipl": [8, 10, 14], "forget": 8, "correl": 8, "sequenti": [8, 15], "tend": 8, "remov": [8, 14], "oscil": 8, "diverg": [8, 12, 14, 16], "catastroph": 8, "aka": 8, "paramet": [8, 9, 10, 11, 12, 13, 14, 15], "signific": [8, 11, 14], "shift": 8, "closer": 8, "chase": 8, "were": 8, "cowboi": 8, "catch": 8, "cow": 8, "separ": 8, "copi": 8, "look": 8, "further": [8, 11], "speed": [8, 16], "up": [8, 9, 10, 11], "face": 8, "sure": [8, 16], "accuraci": 8, "tri": 8, "neighbor": 8, "about": [8, 10, 14], "noisi": [8, 9], "fals": [8, 9, 16], "regularli": 8, "higher": [8, 9, 14], "complic": 8, "decoupl": 8, "section": [9, 12, 14], "dqn": 9, "cartpol": [9, 10, 11, 15], "v1": [9, 10, 11, 15], "gymnasium": [9, 15], "decid": 9, "cart": [9, 11], "pole": [9, 11], "attach": [9, 10], "stai": 9, "upright": 9, "indic": [9, 14], "increment": 9, "timestep": [9, 11, 12, 15], "termin": [9, 10, 15], "fall": 9, "too": [9, 14, 16], "unit": 9, "awai": [9, 14], "center": 9, "instal": 9, "pip": 9, "math": [9, 10], "matplotlib": 9, "pyplot": 9, "plt": 9, "namedtupl": [9, 11], "dequ": [9, 10], "itertool": [9, 10, 11], "count": [9, 10, 11], "gym": [9, 10, 11, 15], "torch": [9, 10, 11, 15, 16], "nn": [9, 10, 11, 15], "env": 9, "is_ipython": 9, "inlin": 9, "get_backend": 9, "ipython": 9, "displai": 9, "ion": 9, "gpu": 9, "devic": [9, 15], "cuda": [9, 15], "is_avail": [9, 15], "els": [9, 15, 16], "cpu": [9, 15], "class": [9, 10, 11, 15], "singl": [9, 12, 16], "map": [9, 16], "next_stat": 9, "screen": 9, "imag": 9, "replaymemori": 9, "cyclic": 9, "bound": [9, 12], "size": [9, 11, 12, 14], "object": [9, 10, 12, 16], "def": [9, 10, 11, 15, 16], "__init__": [9, 10, 11, 15], "maxlen": 9, "push": [9, 10, 11, 14], "append": [9, 10, 11, 16], "batch_siz": [9, 15], "__len__": 9, "len": 9, "feed": 9, "forward": [9, 10, 11], "patch": 9, "input": [9, 11], "modul": [9, 10, 11, 15], "n_observ": 9, "n_action": 9, "layer1": 9, "128": [9, 10, 11, 15], "layer2": 9, "layer3": 9, "tensor": [9, 10, 11, 15, 16], "left0exp": 9, "right0exp": 9, "relu": [9, 10, 11], "mention": [9, 16], "eps_start": 9, "eps_end": 9, "final": 9, "eps_decai": 9, "exponenti": 9, "decai": 9, "slower": [9, 10], "lr": [9, 10, 11, 15], "adamw": 9, "99": [9, 10, 11, 15], "9": 9, "05": [9, 10, 11], "1000": 9, "005": 9, "1e": [9, 10, 15], "action_spac": 9, "info": [9, 15], "policy_net": 9, "target_net": 9, "load_state_dict": 9, "state_dict": 9, "amsgrad": 9, "true": [9, 10, 11, 12, 16], "10000": [9, 10, 11], "steps_don": 9, "select_act": [9, 10, 11], "global": [9, 10], "eps_threshold": 9, "exp": [9, 15], "no_grad": [9, 15, 16], "largest": [9, 12], "column": [9, 16], "second": [9, 13], "index": 9, "wa": [9, 10, 14], "pick": 9, "larger": [9, 12], "dtype": [9, 10, 11], "long": [9, 15], "episode_dur": 9, "plot_dur": 9, "show_result": 9, "figur": 9, "durations_t": 9, "float": [9, 10, 11, 16], "titl": 9, "clf": 9, "xlabel": 9, "ylabel": 9, "durat": 9, "plot": 9, "numpi": [9, 10, 11, 15], "100": [9, 10, 11], "averag": [9, 10, 11, 12], "unfold": 9, "cat": [9, 10], "zero": [9, 15], "paus": 9, "001": 9, "bit": 9, "gcf": 9, "clear_output": 9, "optimize_model": 9, "concaten": 9, "soft": 9, "previous": 9, "huber": 9, "squar": [9, 10, 14], "larg": [9, 11, 12, 13, 14], "robust": [9, 12], "outlier": 9, "l": [9, 13, 14, 16], "delta": [9, 11, 12, 15, 16], "frac": [9, 10, 11, 12, 14, 16], "convert": 9, "zip": [9, 10, 11, 16], "mask": [9, 16], "simul": [9, 12], "non_final_mask": 9, "lambda": [9, 16], "none": [9, 15, 16], "bool": [9, 10], "non_final_next_st": 9, "state_batch": 9, "action_batch": 9, "reward_batch": 9, "These": 9, "state_action_valu": 9, "gather": 9, "older": [9, 14], "merg": 9, "next_state_valu": 9, "expected_state_action_valu": 9, "criterion": 9, "smoothl1loss": 9, "unsqueez": [9, 10], "zero_grad": [9, 10, 11, 15], "backward": [9, 10, 11, 15, 16], "place": [9, 13], "clip": [9, 16], "clip_grad_value_": 9, "main": [9, 13], "fail": 9, "restart": 9, "num_episod": 9, "600": 9, "i_episod": [9, 10, 11], "rang": [9, 10, 11, 14, 15, 16], "float32": [9, 10, 11], "item": [9, 10, 11], "\u03b8": 9, "\u03c4": 9, "target_net_state_dict": 9, "policy_net_state_dict": 9, "kei": 9, "break": [9, 10, 11, 16], "print": [9, 10, 11], "ioff": 9, "432x288": 9, "ax": 9, "intermedi": 10, "toward": 10, "parameter": 10, "ascent": [10, 14], "j": 10, "dimension": 10, "deep": 10, "assign": 10, "score": [10, 11, 16], "aggress": 10, "dramat": [10, 14], "local": [10, 12], "optimum": 10, "longer": 10, "varianc": [10, 13, 16], "leftarrow": 10, "nabla": [10, 14], "deriv": 10, "fortun": [10, 11], "reformul": 10, "nabla_": [10, 11, 12, 13, 14], "log": [10, 11, 13, 14], "h": 10, "interpret": 10, "steepest": 10, "increas": [10, 11, 12], "down": 10, "examin": 10, "proport": 10, "doesn": 10, "sens": 10, "realli": 10, "basi": 10, "bear": 10, "lower": [10, 12], "simplest": 10, "claim": 10, "eglp": 10, "lemma": 10, "normal": 10, "int_": 10, "trick": 10, "b": [10, 13], "add": 10, "subtract": [10, 11], "common": 10, "choic": [10, 13], "life": 10, "empir": 10, "desir": 10, "faster": [10, 11], "stabl": [10, 13], "practic": [10, 12, 13], "cannot": 10, "exactli": [10, 12], "phi": [10, 14, 16], "concurr": 10, "minim": 10, "phi_": [10, 14, 16], "min": [10, 14], "hat": [10, 11, 13, 14, 16], "pi_k": 10, "epoch": [10, 15, 16], "seen": [10, 14], "phi_t": 10, "could": [10, 12], "despit": [10, 13], "wors": 10, "rel": [10, 11], "mlp": 10, "affine1": [10, 11], "dropout": 10, "affine2": 10, "saved_log_prob": 10, "action_scor": 10, "softmax": [10, 11], "dim": [10, 11], "adam": [10, 11, 15], "seed": [10, 11, 15], "00118216": 10, "04504637": 10, "03558404": 10, "04486495": 10, "np": [10, 11, 15, 16], "categor": [10, 11, 15], "from_numpi": [10, 11], "prob": [10, 11, 15], "log_prob": [10, 11, 15], "finish_episod": [10, 11], "ep": [10, 11, 15], "finfo": [10, 11], "policy_loss": [10, 11], "appendleft": 10, "std": [10, 11, 15], "del": [10, 11], "running_reward": [10, 11], "10": [10, 11], "ep_reward": [10, 11], "tlast": [10, 11], "2f": [10, 11], "taverag": [10, 11], "format": [10, 11], "spec": [10, 11], "reward_threshold": [10, 11], "last": [10, 11, 16], "user": [10, 16], "xiayunhui": 10, "anaconda3": 10, "lib": 10, "python3": 10, "11": [10, 11], "site": 10, "packag": 10, "passive_env_check": 10, "py": 10, "233": 10, "deprecationwarn": 10, "bool8": 10, "deprec": 10, "alia": 10, "bool_": 10, "24": 10, "isinst": [10, 15], "45": 10, "00": [10, 11], "15": 10, "06": 10, "35": 10, "27": 10, "30": [10, 11], "98": 10, "40": [10, 11], "73": 10, "42": [10, 11], "89": 10, "50": [10, 11], "39": 10, "75": 10, "60": [10, 11], "92": 10, "66": 10, "16": 10, "70": [10, 11], "331": 10, "107": 10, "18": 10, "80": [10, 11], "103": 10, "154": 10, "36": 10, "90": [10, 11], "48": [10, 11], "113": 10, "81": 10, "96": 10, "110": [10, 11], "172": 10, "155": 10, "120": [10, 11], "239": [10, 11], "206": 10, "130": [10, 11], "196": 10, "224": 10, "19": [10, 11], "140": 10, "194": 10, "251": 10, "26": [10, 11], "150": 10, "372": 10, "160": 10, "305": 10, "362": 10, "52": 10, "649": 10, "4581415449471": 10, "5964": 10, "aim": 11, "saw": 11, "well": 11, "mont": [11, 12], "carlo": [11, 12], "todai": [11, 14], "hybrid": [11, 14], "architectur": [11, 14], "behav": 11, "measur": [11, 12], "proportion": 11, "decreas": 11, "unbias": 11, "vari": 11, "significantli": 11, "across": 11, "mitig": 11, "addit": [11, 16], "mechan": 11, "friend": 11, "assist": 11, "w": 11, "pass": [11, 16], "beta": [11, 16], "extra": 11, "beyond": 11, "opposit": 11, "layer": [11, 15], "action_head": 11, "value_head": 11, "saved_act": 11, "chose": 11, "action_prob": 11, "evalu": [11, 12], "state_valu": 11, "list": 11, "3e": 11, "02383879": 11, "02015088": 11, "03142257": 11, "04080841": 11, "savedact": 11, "code": [11, 16], "backprop": 11, "value_loss": 11, "insert": 11, "l1": 11, "smooth": 11, "smooth_l1_loss": 11, "stack": [11, 16], "9999": 11, "check": 11, "12": 11, "13": 11, "41": 11, "82": 11, "44": 11, "29": 11, "22": 11, "14": 11, "87": 11, "64": [11, 15], "71": 11, "1857": 11, "195": 11, "173": 11, "51": 11, "179": 11, "164": 11, "31": 11, "178": 11, "815": 11, "4286146729273": 11, "constraint": [12, 14], "rho_": 12, "distriarbut": 12, "eta": 12, "s_0": [12, 13], "a_0": [12, 13], "ident": 12, "tild": 12, "advantag": [12, 14, 15], "visit": 12, "frequenc": 12, "s_2": 12, "rewrit": 12, "impli": 12, "rho": 12, "complex": 12, "difficult": 12, "introduc": [12, 13], "l_": 12, "rather": 12, "match": 12, "theta_": [12, 14, 16], "theta_0": [12, 16], "suffici": 12, "guidanc": 12, "big": 12, "address": [12, 13], "issu": 12, "author": 12, "propos": 12, "scheme": 12, "explicit": 12, "total": [12, 13], "variat": 12, "d_": [12, 16], "tv": 12, "distanc": 12, "theorem": 12, "relationship": 12, "kl": 12, "cd_": 12, "exact": 12, "constrain": [12, 14], "type": 12, "minor": 12, "mm": 12, "trust": [12, 13], "region": [12, 13], "preced": 12, "penalti": 12, "coeffici": 12, "recommend": 12, "theori": 12, "subject": 12, "impos": 12, "motiv": 12, "impract": 12, "due": 12, "heurist": 12, "bar": 12, "theta_1": [12, 16], "theta_2": [12, 16], "replac": [12, 14], "contribut": 12, "s_n": 12, "equival": 12, "procedur": [12, 13], "a_1": 12, "henc": 12, "challeng": 13, "typic": [13, 14], "difficulti": 13, "steadi": 13, "nonstationar": 13, "incom": 13, "data": [13, 16], "substanti": 13, "cost": 13, "bia": [13, 15], "g": [13, 14, 16], "psi_": 13, "baselin": 13, "version": 13, "formula": 13, "residu": 13, "almost": 13, "lowest": 13, "downweight": 13, "delai": 13, "treat": 13, "reduct": 13, "proceed": 13, "proposit": 13, "q_t": 13, "b_t": 13, "actor": [14, 15], "a2c": 14, "specif": 14, "harm": 14, "slow": 14, "multipli": 14, "former": 14, "excess": 14, "penal": 14, "ensur": [14, 16], "minimum": 14, "situat": 14, "via": 14, "theta_k": 14, "sgd": 14, "hyperparamet": [14, 16], "roughli": 14, "sai": 14, "serv": 14, "regular": 14, "incent": 14, "profit": 14, "paramt": 14, "tau_": 14, "fit": 14, "regress": 14, "min_": 14, "make_env": 15, "env_id": 15, "thunk": 15, "wrapper": 15, "recordepisodestatist": 15, "num_env": 15, "syncvectorenv": 15, "assert": 15, "single_action_spac": 15, "support": [15, 16], "layer_init": 15, "sqrt": 15, "bias_const": 15, "init": 15, "orthogonal_": 15, "constant_": 15, "single_observation_spac": 15, "shape": 15, "prod": 15, "tanh": 15, "01": 15, "get_valu": 15, "get_action_and_valu": 15, "logit": [15, 16], "entropi": [15, 16], "learning_r": [15, 16], "5e": 15, "per": 15, "rollout": 15, "num_step": 15, "algo": 15, "logic": 15, "storag": 15, "setup": 15, "ob": 15, "logprob": 15, "global_step": 15, "start_tim": 15, "next_ob": 15, "next_don": 15, "total_timestep": 15, "20000": 15, "int": 15, "minibatch_s": 15, "num_iter": 15, "gae_lambda": 15, "95": 15, "gae": 15, "fill": 15, "v_t": 15, "flatten": 15, "logical_or": 15, "next_valu": 15, "reshap": 15, "zeros_lik": 15, "lastgaelam": [15, 16], "revers": [15, 16], "nextnontermin": 15, "nextvalu": [15, 16], "b_ob": 15, "b_logprob": 15, "b_action": 15, "b_advantag": 15, "b_return": 15, "b_valu": 15, "update_epoch": 15, "clip_coef": 15, "ent_coef": 15, "vf_coef": 15, "max_grad_norm": [15, 16], "b_ind": [15, 16], "arang": 15, "clipfrac": 15, "shuffl": 15, "mb_ind": 15, "newlogprob": 15, "newvalu": 15, "logratio": 15, "ratio": [15, 16], "mb_advantag": 15, "pg_loss1": 15, "pg_loss2": 15, "clamp": [15, 16], "pg_loss": [15, 16], "v_loss": 15, "entropy_loss": 15, "clip_grad_norm_": [15, 16], "languag": 16, "signal": 16, "handcraft": 16, "prefer": 16, "respons": 16, "queri": 16, "scalar": 16, "optimis": 16, "deviat": 16, "activ": 16, "contain": 16, "load_dataset": 16, "huggingfaceh4": 16, "cherry_picked_prompt": 16, "rename_column": 16, "prompt": 16, "remove_column": 16, "meta": 16, "subset": 16, "ppo_dataset_dict": 16, "moon": 16, "land": 16, "year": 16, "sentenc": 16, "aren": 16, "bird": 16, "real": 16, "happen": 16, "fire": 16, "cannonbal": 16, "pumpkin": 16, "steal": 16, "groceri": 16, "caught": 16, "eat": 16, "sock": 16, "medit": 16, "wish": 16, "addition": 16, "reward_model": 16, "ppoconfig": 16, "dataclass": 16, "config": 16, "model_nam": 16, "gpt2": 16, "41e": 16, "automat": 16, "transform": 16, "autotoken": 16, "automodelforcausallmwithvaluehead": 16, "from_pretrain": 16, "pad_token": 16, "eos_token": 16, "string": 16, "length": 16, "bleu": 16, "pipelin": 16, "classif": 16, "lvwerra": 16, "distilbert": 16, "imdb": 16, "lastli": 16, "pretoken": 16, "input_id": 16, "encod": 16, "readi": 16, "ppo_train": 16, "guid": 16, "generation_kwarg": 16, "min_length": 16, "top_k": 16, "top_p": 16, "do_sampl": 16, "pad_token_id": 16, "eos_token_id": 16, "tqdm": 16, "dataload": 16, "query_tensor": 16, "sftmodel": 16, "response_tensor": 16, "decod": 16, "squeez": 16, "pipe_output": 16, "stat": 16, "log_stat": 16, "save_model": 16, "my_ppo_model": 16, "statist": 16, "rlhf": 16, "workflow": 16, "llm": 16, "y_1": 16, "y_t": 16, "all_logprob": 16, "logits_or_non": 16, "batched_forward_pass": 16, "model_input": 16, "response_mask": 16, "return_logit": 16, "full_kl_penalti": 16, "input_kwarg": 16, "optional_peft_ctx": 16, "ref_logprob": 16, "ref_logits_or_non": 16, "is_peft_model": 16, "ref_model": 16, "compute_reward": 16, "floattensor": 16, "longtensor": 16, "non_score_reward": 16, "_kl_penalti": 16, "kl_ctl": 16, "clone": 16, "last_non_masked_index": 16, "nonzero": 16, "delta_t": 16, "delta_": 16, "techniqu": 16, "gen_len": 16, "lam": 16, "advantages_revers": 16, "transpos": 16, "ppo_epoch": 16, "early_stop": 16, "permut": 16, "bs": 16, "backward_batch_start": 16, "backward_batch_s": 16, "backward_batch_end": 16, "backward_batch_ind": 16, "mini_batch_start": 16, "mini_batch_s": 16, "within": 16, "everytim": 16, "newest": 16, "vpred": 16, "mini_batch_dict": 16, "pgloss": 16, "pg_losses2": 16, "cliprang": 16, "masked_mean": 16, "pg_clipfrac": 16, "gt": 16, "vfloss": 16, "vf_losses1": 16, "loss_p": 16, "loss_v": 16, "train_stat": 16, "old_logprob": 16, "acceler": 16, "sync_gradi": 16, "model_param": 16}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"what": 0, "reinforc": [0, 1, 10, 11], "learn": [0, 1, 6, 7, 8, 9], "The": [0, 1, 2, 3, 4, 7, 8, 10, 11, 14], "big": 0, "pictur": 0, "A": 0, "formal": [0, 1], "definit": 0, "framework": 1, "rl": [1, 2], "process": [1, 11], "reward": [1, 16], "hypothesi": 1, "central": 1, "idea": 1, "observ": 1, "state": [1, 2, 3], "space": 1, "action": [1, 2, 3, 4, 6], "return": 1, "two": 2, "main": [2, 10, 11, 15], "approach": 2, "solv": [2, 4], "problem": [2, 11], "polici": [2, 4, 5, 7, 10, 12, 14, 16], "pi": 2, "agent": [2, 15], "s": 2, "brain": 2, "base": [2, 6, 12], "method": [2, 6, 10, 11], "valu": [2, 3, 4, 5, 6, 16], "function": [2, 3, 13, 14, 16], "bellman": [3, 4], "equat": [3, 4], "relat": 3, "between": 3, "v": 3, "q": [3, 7, 8, 9], "optim": [4, 12, 14, 16], "contract": 4, "map": 4, "theorem": [4, 5, 10], "banach": 4, "fix": [4, 8], "point": 4, "an": [4, 16], "from": 4, "boe": 4, "other": [4, 10], "form": [4, 10], "dynam": 5, "program": 5, "evalu": [5, 16], "improv": [5, 12], "iter": 5, "mont": [6, 10], "carlo": [6, 10], "vs": [6, 7], "tempor": 6, "differ": 6, "end": 6, "episod": [6, 10, 11], "each": 6, "step": [6, 9], "algorithm": [7, 8, 10, 16], "off": 7, "On": 7, "deep": [8, 9, 16], "experi": [8, 16], "replai": [8, 9], "target": 8, "variant": 8, "doubl": 8, "dqn": 8, "pytorch": [9, 10, 11], "task": 9, "packag": 9, "memori": 9, "network": [9, 10], "hyperparamet": 9, "util": 9, "train": [9, 16], "one": 9, "loop": [9, 10, 11, 15, 16], "gradient": [10, 16], "advantag": [10, 11, 13, 16], "disadvantag": 10, "don": 10, "t": 10, "let": 10, "past": 10, "distract": 10, "you": 10, "baselin": 10, "exampl": [10, 11], "env": [10, 11, 15], "One": [10, 11], "actor": 11, "critic": 11, "varianc": 11, "a2c": 11, "reduc": 11, "ad": 11, "model": [11, 16], "trpo": 12, "preliminari": [12, 13], "monoton": 12, "guarante": 12, "parameter": 12, "sampl": [12, 16], "estim": [12, 13], "gener": 13, "proxim": 14, "introduc": 14, "clip": 14, "surrog": 14, "object": 14, "recap": 14, "ratio": 14, "unclip": 14, "part": 14, "ppo": [14, 15, 16], "cleanrl": 15, "start": [15, 16], "game": 15, "trl": 16, "introduct": 16, "trainer": 16, "how": 16, "work": 16, "expect": 16, "dataset": 16, "format": 16, "us": 16, "ppotrain": 16, "initi": 16, "log": 16, "dive": 16, "1": 16, "rollout": 16, "2": 16, "3": 16, "old": 16, "logprob": 16, "4": 16, "ref": 16, "sft": 16, "5": 16, "comput": 16, "per": 16, "token": 16, "kl": 16, "penalti": 16, "6": 16, "gae": 16, "7": 16, "buffer": 16, "minibatch": 16, "8": 16, "new": 16, "9": 16, "loss": 16, "10": 16, "11": 16}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})