**Tabs** — segmented tab strip. Renders the strip; you render the panel below it.

```jsx
const [tab, setTab] = useState("overview");
<Tabs tabs={[{value:"overview",label:"Overview"},{value:"activity",label:"Activity"}]} value={tab} onChange={setTab} />
<div className="bd-tab-panel">
  {tab === "overview" ? <Overview /> : <Activity />}
</div>
```
