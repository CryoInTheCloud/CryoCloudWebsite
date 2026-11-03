# (5) Files, Memory, Storage, and Quotas

Every StratusGeo user gets a personal home directory for their files. This
page explains where to keep things, how much space you have, and how to check
your usage.

## Where to keep your files

| Location | Path | Kept after your server stops? | Use it for |
|----------|------|-------------------------------|------------|
| **Home directory** | `/home/jovyan` (shown as `~`) | Yes | Your code, notebooks, and small files |
| **Temporary space** | `/tmp` | No | Files you only need during this session |
| **Shared** | `~/shared` | Yes | Datasets the StratusGeo team provides (read-only) |
| **Shared public** | `~/shared-public` | Yes, but anyone can delete them | Briefly passing files to other users |

% TODO: confirm /tmp is cleared when the server stops

### Your home directory

Your home directory is private to you and is saved between sessions. It's
where the file browser opens, and it's the right place for your notebooks,
Git repositories, and settings.

It is **not** meant for large datasets. Storage is billed every month whether
or not you use the files, so please keep your home directory small (see
[Storage quota](#storage-quota) below).

### Temporary space

`/tmp` is fast, but everything in it disappears when your server stops. It's
useful for downloading a file, working with it, and letting it go. Copy any
results you want to keep into your home directory.

### Shared folders

- **`~/shared`** holds files the StratusGeo team has made available to
  everyone. You can read them but not change them.
- **`~/shared-public`** can be read and changed by every user. It's handy for
  handing a file to a teammate, but anyone can delete what's there.

:::{warning}
Only put copies or easy-to-recreate files in `~/shared-public`, delete them
when you're done, and never remove other people's files.
:::

(storage-quota)=
## Storage quota

| | Limit |
|---|---|
| **Recommended** | Keep your home directory under **10 GB** |
| **Maximum** | **30 GB** |

% TODO: what happens at 30 GB? (e.g., file saves fail, server won't start)
% TODO: does ~/shared and ~/shared-public count toward the quota?

If your work needs more than what is allocated, reach out to us. 

### Why it matters

StratusGeo is a shared, community-funded resource, and cloud storage has a
real monthly cost. For example, storing 2 TB costs the project about **$90
every month**. Keeping your files lean keeps the hub available for everyone.

## Checking your usage

**From the hub:** go to **File → Hub Control Panel → Services → Usage Quota**.

**From the terminal:** run this command to see how much space your home
directory uses (it leaves out the shared folders):

```bash
du -hs --exclude="shared*" ~/
```

To see which folders are largest:

```bash
du -h --max-depth=1 --exclude="shared*" ~/ | sort -h
```

The biggest folders are listed last. Hidden folders like `~/.cache` can grow
larger than you'd expect.

## Staying under your quota

- **Stream data instead of downloading it** whenever you can. It's usually
  faster and uses no storage. See
  [Leveraging earthaccess](../../how_tos/data_access/earthaccess.ipynb).
- **If you need to download, use `/tmp`**, or delete the files from your home
  directory as soon as you're done.
- **Don't keep data you aren't using.** Please clear out anything you haven't
  touched in a month or so.
- **Push your code to GitHub** so it's backed up outside the hub. See
  [The Terminal and Git](./2_terminal_and_git.md).

Working with large datasets? See the [Data Storage guides](../../how_tos/data_storage/index.md).

## What's kept when your server stops

Your server stops when you shut